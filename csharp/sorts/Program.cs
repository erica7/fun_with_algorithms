using System;
using System.Collections.Generic;

// to do:
//   merge sort
//   quick sort

namespace csharpSorts
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            int[] testCase = {111,34,4356,324,23,24,1,5,7,9,2,4,8,11};
            int len = testCase.Length;
            List<int> testCaseList = new List<int>();
            for (int i=0; i<len; i++)
            {
                testCaseList.Add(testCase[i]);
            }

            // BUBBLE SORT
            int[] bubbleSortReturn = BubbleSort(testCase);
            foreach (var item in bubbleSortReturn)
            {
                Console.WriteLine(item);
            }
        }

        static int[] BubbleSort(int[] arr)
        {
            int len = arr.Length;
            bool sorted = true;

            for (int n = 0; n < len; n++)
            {
                for (int i = 0; i < len-1-n; i++)
                {
                    if (arr[i] > arr[i+1])
                    {
                        int temp = arr[i+1];
                        arr[i+1] = arr[i];
                        arr[i] = temp;
                        sorted = false;
                    }
                }
                if (sorted) 
                {
                    return arr;
                }
                else 
                {
                    sorted = true;
                }
            }
            return arr;
        }
    }
}
