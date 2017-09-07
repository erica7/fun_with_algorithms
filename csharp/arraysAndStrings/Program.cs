using System;
using System.Collections.Generic;

// namespace csharp
namespace arraysAndStrings
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            // SUM SEQUENCE
            // Console.WriteLine(SumSequence(2,2,2));  // 2
            // Console.WriteLine(SumSequence(2,6,2));  // 12
            // Console.WriteLine(SumSequence(1,5,1));  // 15
            // Console.WriteLine(SumSequence(1,5,3));  // 5
            // Console.WriteLine(SumSequence(9,5,3));  // 0

            // RANGES
            int[] rangesTestCase = {-3, -2, -1, 4, 6, 7, 9, 10, 11, 15};
            // Console.WriteLine(Ranges(rangesTestCase));  // -3--1,4,6,7,9-11,15

            // XO 
            // Console.WriteLine(Xo("xo"));  // True
            // Console.WriteLine(Xo("xxOo"));  // True
            // Console.WriteLine(Xo("xxxm"));  // False
            // Console.WriteLine(Xo("Oo"));  // False
            // Console.WriteLine(Xo("ooom"));  // False

            // PEAKS
            int[] testCase = {5,2,3,6,4,1,2,3,2,1,4};  // should return { pos: [ 3, 7 ], peaks: [ 6, 3 ] }
            int[] testCase2 = {1,2,2,1};  // should return { pos: [ 1 ], peaks: [ 2 ] }
            int[] testCase3 = {1,2,2,3};  // should return empty arrays { pos: [], peaks: [] }
            int[] testCase4 = {0,1,2,5,1,0};  // should return empty arrays { pos: [ 3 ], peaks: [ 5 ] }
            int[] testCase5 = {5,2,3,6,4,1,2,3,2,1,4,1,2,2,3};  // should return { pos: [ 3, 7, 10 ], peaks: [ 6, 3, 4 ] }
            List<int>[] testCaseRet = Peaks(testCase5);
            Console.Write("pos:   ");
            testCaseRet[0].ForEach(item => Console.Write("{0}  ", item));
            Console.WriteLine();
            Console.Write("peaks: ");
            testCaseRet[1].ForEach(item => Console.Write("{0}  ", item));
            Console.WriteLine();
        }

        static int SumSequence(int being, int end, int step) 
        {
            if (being > end) 
            {
                return 0;
            }
            int sum = being;
            int next = being + step;
            while (next <= end) 
            {
                sum += next;
                next += step;
            }
            return sum;
        }

        static List<string> Ranges(int[] arr)  // assume sorted input array 
        {
            int count = 0;
            int len = arr.Length-1;
            List<string> newList = new List<string>();
            int i;
            for (i=0; i<len; i++)
            {
                if (arr[i]+1 == arr[i+1])
                {
                    count++;
                } else {
                    if (count >= 2)
                    {
                        newList.Add(arr[i-count].ToString() + "-" + arr[i].ToString());
                        // newList.Add("999");
                    } 
                    else if (count == 1)
                    {
                        newList.Add(arr[i-1].ToString());
                        newList.Add(arr[i].ToString());
                    }
                    else
                    {
                        newList.Add(arr[i].ToString());
                    }
                    count = 0;
                }
            }
            if (count >= 2)
            {
                newList.Add(arr[i-count].ToString() + "-" + arr[i].ToString());
            } 
            else if (count == 1)
            {
                newList.Add(arr[i-1].ToString());
                newList.Add(arr[i].ToString());
            }
            else
            {
                newList.Add(arr[i].ToString());
            }
            return newList;
        }

        static bool Xo(string str) 
        {
            int count = 0;
            int len = str.Length;
            for (int i=0; i < len; i++) 
            {
                if (str[i] == "x".ToCharArray()[0] || str[i] == "X".ToCharArray()[0])
                {
                    count++;
                }
                else if (str[i] == "o".ToCharArray()[0] || str[i] == "O".ToCharArray()[0])
                {
                    count--;
                }
            }
            if (count == 0)
            {
                return true;
            }
            return false;
        }

        static List<int>[] Peaks(int[] arr)
        {
            List<int> pos = new List<int>();
            List<int> peaks = new List<int>();
            int len = arr.Length;

            for (int i = 1; i < len - 1; i++)
            {
                if (arr[i] > arr[i-1] && arr[i] > arr[i+1])
                {
                    peaks.Add(arr[i]);
                    pos.Add(i);

                } 
                else if (arr[i] > arr[i-1] && arr[i] == arr[i+1])
                {
                    for (int j = i+1; j < len; j++)
                    {
                        if (arr[j] > arr[i] || (arr[j] == arr[i] && j == len-1))
                        {
                            break;
                        }
                        if (arr[j] < arr[i])
                        {
                            peaks.Add(arr[i]);
                            pos.Add(i);
                            break;
                        }
                    }
                }
            }

            List<int>[] ret = { pos, peaks };
            return ret;
        }
    }
}
