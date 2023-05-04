# Definition for singly-linked list.
defmodule ListNode do
  @type t :: %__MODULE__{
          val: integer,
          next: ListNode.t() | nil
        }
  defstruct val: 0, next: nil
end

defmodule Solution do
  @moduledoc """
  You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

  You may assume the two numbers do not contain any leading zero, except the number 0 itself.

  Example 1:
  2 -> 4 -> 3
  5 -> 6 -> 4
  7 -> 0 -> 8

  Input: l1 = [2,4,3], l2 = [5,6,4]
  Output: [7,0,8]
  Explanation: 342 + 465 = 807.
  Example 2:

  Input: l1 = [0], l2 = [0]
  Output: [0]
  Example 3:

  Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
  Output: [8,9,9,9,0,0,0,1]

  Constraints:

  The number of nodes in each linked list is in the range [1, 100].
  0 <= Node.val <= 9
  It is guaranteed that the list represents a number that does not have leading zeros.

  """

  @doc """

  # First try
  Input: l1 = [2,4,3], l2 = [5,6,4]
  Output: [7,0,8]
  Explanation: 342 + 465 = 807.
  Example 2:

  Solution.add_two_numbers([2,4,3], [5,6,4])
  Solution.add_two_numbers([9,9,9,9,9,9,9], [9,9,9,9])

  """
  @spec add_two_numbers(l1 :: ListNode.t() | nil, l2 :: ListNode.t() | nil) :: ListNode.t() | nil
  def add_two_numbers(l1, l2) do
    # %{l1: l1, l2: l2} |> IO.inspect(label: "ini")

    #     case sum_2_lists(l1, l2, [])
    #          |> Enum.reduce([[], 0], fn n, [l, a] = acc ->
    #            n = n + a
    #
    #            #  IO.inspect(%{n: n, acc: acc}, label: "n")
    #
    #            if n < 10 do
    #              [l ++ [n], 0]
    #              #  |> IO.inspect(label: "case 1")
    #            else
    #              [x, n] = n |> Integer.to_string() |> String.codepoints()
    #
    #              [l ++ [n |> String.to_integer()], x |> String.to_integer()]
    #              #  |> IO.inspect(label: "case 2")
    #            end
    #          end) do
    #       [ans, 0] -> ans
    #       [ans, f] -> ans ++ [f]
    #     end
    #     |> Enum.reverse()
    sum_2_lists(l1, l2, nil)
    # |> IO.inspect(label: "before reduce")
    #     |> Enum.reduce(%ListNode{val: nil, next: nil}, fn n, ln ->
    #       %{n: n, ln: ln} |> IO.inspect(label: "xxx")
    #
    #       next =
    #         case ln do
    #           %ListNode{val: nil} -> nil
    #           %ListNode{val: _} -> ln
    #         end
    #
    #       %ListNode{val: n, next: next}
    #     end)
    # |> Enum.filter(&(!is_nil(&1)))
    |> close_next()
    |> IO.inspect(label: "after")
  end

  #   def replace_deepest_next(node, new_val) do
  #
  #     case node do
  #       %{val: 0, next: nil} -> node |> Map.put(:val, new_val) |> Map.put(:next, nil)
  #       %{next: next_node} -> next_node |> replace_deepest_next(new_val)
  #     end
  #   end

  def replace_deepest_next(node) do
    node |> IO.inspect(label: "End!")
    # %{node | next: %{val: nil, next: nil}}
    %{node | next: nil}
  end

  def replace_deepest_next(node, new_val) do
    node |> IO.inspect(label: "node")

    case node do
      %{next: %{val: nil, next: nil}, val: _} = ln ->
        IO.inspect("case 1")

        case new_val do
          nil -> %{ln | next: nil}
          # new_val -> %{ln | next:  %ListNode{val: new_val, next: %{val: nil, next: nil}}}
          new_val -> ln |> add_next_if_bigger_than_9(new_val)
        end

      %{next: nil, val: 0} ->
        IO.inspect("case 2")
        %ListNode{next: nil, val: new_val}

      %{next: nil, val: v1} = last_node_with_number ->
        IO.inspect("case 3")
        # %{last_node_with_number | next: %ListNode{val: new_val, next: nil}}
        # %{last_node_with_number | val: new_val + v1, next: nil}
        # last_node_with_number |> add_next_if_bigger_than_9(new_val + v1)
        case sum_and_get_l_and_n(new_val + v1) do
          [leading, n] ->
            %{last_node_with_number | val: n, next: %ListNode{val: leading, next: nil}}
            |> IO.inspect(label: "case 3 - A")

          n ->
            %{last_node_with_number | val: n, next: %{val: nil, next: nil}}
            |> IO.inspect(label: "case 3 - B")
        end

      %{next: next_node} ->
        IO.inspect("case 4")
        %{node | next: replace_deepest_next(next_node, new_val)}
    end
  end

  defp close_next(%ListNode{next: %{val: nil, next: nil}} = ln) do
    %{ln | next: nil}
  end

  defp close_next(%ListNode{next: next} = ln) do
    %{ln | next: next |> close_next()}
  end

  defp close_next(ln) do
    ln |> IO.inspect(label: "???")
    # %{ln | next: next |> close_next()}
  end

  defp sum_2_lists(nil, nil, tmp), do: tmp

  defp sum_2_lists(nil, %ListNode{val: v2, next: nil}, tmp) do
    tmp |> IO.inspect(label: "l1 n - l2 y - next nil")
    sum_2_lists(nil, nil, tmp |> replace_deepest_next(v2))
  end

  defp sum_2_lists(nil, %ListNode{val: v2, next: next_l2}, tmp) do
    %{tmp: tmp} |> IO.inspect(label: "l1 n - l2 y - next !nil")
    sum_2_lists(nil, next_l2, tmp |> replace_deepest_next(v2))
  end

  defp sum_2_lists(%ListNode{val: v1, next: nil}, %ListNode{val: v2, next: next_l2}, tmp) do
    sum_2_lists(nil, next_l2, tmp |> add_next_if_bigger_than_9(v1 + v2))
  end

  defp sum_2_lists(%ListNode{val: v1, next: nil}, nil, tmp) do
    tmp |> IO.inspect(label: "l1 y - l2 n - next nil")
    # sum_2_lists(next_l1, nil, %ListNode{val: v1, next: tmp})
    sum_2_lists(nil, nil, tmp |> replace_deepest_next(v1))
  end

  defp sum_2_lists(%ListNode{val: v1, next: next_l1}, nil, tmp) do
    %{tmp: tmp} |> IO.inspect(label: "l1 y - l2 n - next !nil")
    # sum_2_lists(next_l1, nil, %ListNode{val: v1, next: tmp})
    sum_2_lists(next_l1, nil, tmp |> replace_deepest_next(v1))
  end

  defp sum_2_lists(%ListNode{val: v1, next: next_l1}, %ListNode{val: v2, next: nil}, tmp) do
    sum_2_lists(next_l1, nil, tmp |> add_next_if_bigger_than_9(v1 + v2))
  end

  defp sum_2_lists(%ListNode{val: v1, next: next_l1}, %ListNode{val: v2, next: next_l2}, tmp) do
    sum_2_lists(next_l1, next_l2, tmp |> add_next_if_bigger_than_9(v1 + v2))
  end

  defp sum_2_lists(%ListNode{val: v1, next: next_l1}, %ListNode{val: v2, next: next_l2}, tmp) do
    sum_2_lists(next_l1, next_l2, tmp |> add_next_if_bigger_than_9(v1 + v2))
  end

  defp add_next_if_bigger_than_9(nil, num) when num > 9 do
    [leading, n] = sum_and_get_l_and_n(num)
    next = %ListNode{val: n, next: %ListNode{val: leading, next: nil}}

    %{_n: n, _next: next, num: num, leading: leading}
    |> IO.inspect(label: "> 9 - case nil - first > 9")

    next
  end

  defp add_next_if_bigger_than_9(%ListNode{val: v, next: %{val: nil, next: nil}} = ln, num)
       when num > 9 do
    [leading, n] = sum_and_get_l_and_n(num)
    x = %{ln | next: %ListNode{val: n, next: %ListNode{val: leading, next: nil}}}

    %{_ln: ln, _x: x, num: num, leading: leading, _n: n}
    |> IO.inspect(label: "> 9 - start from 1")

    x
  end

  defp add_next_if_bigger_than_9(nil, num) do
    %{num: num} |> IO.inspect(label: "< 9 - nil")
    %ListNode{val: num, next: %{val: nil, next: nil}}
  end

  defp add_next_if_bigger_than_9(ln, num) do
    %{_ln: ln, num: num} |> IO.inspect(label: "< 9")
    ln |> replace_deepest_next(num)
    # %{ln | next: %ListNode{val: num, next: nil}}
  end

  defp sum_and_get_l_and_n(num) do
    case num |> Integer.to_string() |> String.codepoints() do
      [leading, n] ->
        n = n |> String.to_integer()
        leading = leading |> String.to_integer()
        [leading, n]

      [n] ->
        n |> String.to_integer()
    end
  end

  # Old solutions
  #   defp sum_2_lists([], [], tmp), do: tmp
  #   defp sum_2_lists([h1 | t1], [], tmp), do: sum_2_lists(t1, [], tmp ++ [h1])
  #   defp sum_2_lists([], [h2 | t2], tmp), do: sum_2_lists([], t2, tmp ++ [h2])
  #
  #   defp sum_2_lists([h1 | t1], [h2 | t2], tmp) do
  #     # (tmp ++ [(h1 + h2) |> Integer.to_string()]) |> IO.inspect(label: "tmp")
  #     # [h1 + h2] |> IO.inspect(label: "tmp")
  #     # %{h1: h1, t1: t1, h2: h2, t2: t2, tmp: tmp} |> IO.inspect(label: "xxxxx")
  #     sum_2_lists(t1, t2, tmp ++ [h1 + h2])
  #   end
end

# Solution.add_two_numbers([2, 4, 3], [5, 6, 4])
# Solution.add_two_numbers([0], [0])
# Solution.add_two_numbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9])
