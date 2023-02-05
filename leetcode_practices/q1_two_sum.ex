defmodule Solution do
  @moduledoc """
  To start, run this:
  iex q1_two_sum.ex
  Solution.two_sum_s1([3,1,2], 5)
  """

  def check([h | t], count, map, target) when is_map_key(map, target - h) do
    IO.inspect(
      %{
        _h: h,
        _t: t,
        count: count,
        map: map,
        "map[target - h]": map[target - h]
      },
      label: "_1"
    )

    [map[target - h], count]
  end

  def check([h | t], count, map, target) do
    IO.inspect(
      %{
        _h: h,
        _t: t,
        next_count: count + 1,
        map: map,
        "Map.put(map, h, count)": Map.put(map, h, count)
      },
      label: "_2"
    )

    check(t, count + 1, Map.put(map, h, count), target)
  end

  @spec two_sum_s1(nums :: [integer], target :: integer) :: [integer]
  def two_sum_s1(nums, target) do
    IO.inspect(%{nums: nums, target: target}, label: "_input")
    check(nums, 0, %{}, target)
  end

  # ------------------------------------------------------------
  # My attempt
  def two_sum_backup(nums, target) do
    # Expected [0, 1]
    IO.inspect(%{
      nums: nums,
      l: length(nums),
      t: target
    })

    nums =
      Enum.each(nums, fn n ->
        IO.inspect("_removed: #{n}")

        nums
        |> List.delete(n)
        # |> Enum.reduce([], fn next, acc ->
        # |> Enum.reduce(fn next, acc ->
        #   # IO.inspect(%{acc: acc, n: next}, label: "n")
        #   IO.inspect(%{x: next + acc}, label: "x")
        #   # if (target === (next + acc)), do: []
        #   # IO.inspect(Enum.uniq(nums ++ n), label: "uniq")
        # end)
        # WIP: Super close
        |> Enum.reduce_while([n, 0], fn x, [n, i] = acc ->
          IO.inspect(
            %{
              # _eq: "#{x} + #{n}",
              acc: acc,
              _x: x,
              _n: n,
              result: x + n
            },
            label: "x"
          )

          if target == x + n, do: {:halt, [i, i + 1]}, else: {:cont, [x, i + 1]}
        end)
        |> IO.inspect(label: "Here")
      end)

    # f = List.first(nums)

    # nums =
    #   nums
    #   # |> Enum.zip(0..length(nums))
    #   # |> Map.new()
    #   # |> Enum.reduce([], fn {n_first, i_first} = x, {n_sec, i_sec} = acc ->
    #   # |> Enum.reduce([], fn x, acc ->
    #   |> List.delete(f)
    #   |> Enum.reduce_while({f, 0}, fn x, {n, i} = acc ->
    #     IO.inspect(%{x: x, acc: acc}, label: "x")
    #     # if n_first ++ n_sec, do: [i_first, i_sec]
    #     # if target == x + acc, do: {:halt, acc}, else: {[x], acc + 1}
    #     # if target == x + n, do: {:halt, [i, i + 1]}, else: {:cont, {n, i + 1}}
    #     if target == x + n, do: {:halt, [0, i + 1]}, else: {:cont, {n, i + 1}}
    #   end)

    IO.inspect(%{nums: nums}, label: "__after")
    IO.inspect(nums, label: "[ANSWER]")
  end

  @spec two_sum(nums :: [integer], target :: integer) :: [integer]
  def two_sum(nums, target) do
    Enum.reduce_while(nums, {0, 0}, fn x, {n, i} = acc ->
      IO.inspect(%{x: x, acc: acc}, label: "x")
      if target == x + n, do: {:halt, [i - 1, i]}, else: {:cont, {x, i + 1}}
    end)
  end
end

# Input: nums = [2,7,11,15], target = 9
# Output: [0,1]
# Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
# Solution.two_sum([2, 7, 11, 15], 9)

# Input: nums = [3,2,4], target = 6
# Output: [1,2]
# Solution.two_sum([3, 2, 4], 6)

# Input: nums = [3,3], target = 6
# Output: [0,1]
# Solution.two_sum([3, 3], 6)

# Solution.two_sum_backup([3, 3], 6)
# Solution.two_sum_backup([4, 1, 2, 3, 5], 9)
# Solution.two_sum_backup([2, 4, 6, 5, 1], 9)
# Solution.two_sum_backup([3, 1, 2], 5)
Solution.two_sum_s1([3, 1, 2], 5)
