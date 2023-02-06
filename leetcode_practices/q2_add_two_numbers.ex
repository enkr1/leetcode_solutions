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
    %{l1: l1, l2: l2} |> IO.inspect(label: "ini")

    case sum_2_lists(l1, l2, [])
         |> Enum.reduce([[], 0], fn n, [l, a] = acc ->
           n = n + a

           IO.inspect(%{n: n, acc: acc}, label: "n")

           if n < 10 do
             [l ++ [n], 0]
             #  |> IO.inspect(label: "case 1")
           else
             [x, n] = n |> Integer.to_string() |> String.codepoints()

             [l ++ [n |> String.to_integer()], x |> String.to_integer()]
             #  |> IO.inspect(label: "case 2")
           end
         end) do
      [ans, 0] -> ans
      [ans, f] -> ans ++ [f]
    end
  end

  defp sum_2_lists([], [], tmp), do: tmp
  defp sum_2_lists([h1 | t1], [], tmp), do: sum_2_lists(t1, [], tmp ++ [h1])
  defp sum_2_lists([], [h2 | t2], tmp), do: sum_2_lists([], t2, tmp ++ [h2])

  defp sum_2_lists([h1 | t1], [h2 | t2], tmp) do
    # (tmp ++ [(h1 + h2) |> Integer.to_string()]) |> IO.inspect(label: "tmp")
    # [h1 + h2] |> IO.inspect(label: "tmp")
    # %{h1: h1, t1: t1, h2: h2, t2: t2, tmp: tmp} |> IO.inspect(label: "xxxxx")
    sum_2_lists(t1, t2, tmp ++ [h1 + h2])
  end
end

Solution.add_two_numbers([2, 4, 3], [5, 6, 4])
Solution.add_two_numbers([0], [0])
Solution.add_two_numbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9])
