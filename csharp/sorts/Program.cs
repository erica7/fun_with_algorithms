﻿using System;
using System.Collections.Generic;

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

            // // BUBBLE SORT
            // int[] bubbleSortReturn = BubbleSort(testCase);
            // foreach (var item in bubbleSortReturn)
            // {
            //     Console.WriteLine(item);
            // }

            // // SELECTION SORT
            // int[] selectionSortReturn = SelectionSort(testCase);
            // foreach (var item in selectionSortReturn)
            // {
            //     Console.Write("{0}, ", item);
            // }
            // Console.WriteLine();

            // // INSERTION SORT
            // int[] insertionSortReturn = InsertionSort(testCase);
            // foreach (var item in insertionSortReturn)
            // {
            //     Console.Write("{0}, ", item);
            // }
            // Console.WriteLine();            

            // QUICK SORT
            testCaseList.ForEach(item => Console.Write("{0}, ", item));
            Console.WriteLine();
            List<int> quickSortReturn = QuickSort(testCaseList);
            quickSortReturn.ForEach(item => Console.Write("{0}, ", item));
            Console.WriteLine();
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

        static int[] SelectionSort(int[] arr)
        {
            int len = arr.Length;
            for (int n=0; n<len; n++)
            {
                int min = arr[n];
                int minInd = n;
                // find the min each time and swap it to 'beginning' (which keeps moving over; index n)
                for (int i=n; i<len; i++)
                {
                    if (arr[i] < min) 
                    {
                        min = arr[i];
                        minInd = i;
                    }
                }
                if (n != minInd)
                {
                    int temp = arr[n];
                    arr[n] = arr[minInd];
                    arr[minInd] = temp;
                }
            }
            return arr;
        }
        
        static int[] InsertionSort(int[] arr)  
        {
            int len = arr.Length;
            for (int n = 0; n < len-1; n++)
            {
                for (int i = n+1; i > 0; i--)
                {
                    if (arr[i] < arr[i-1])
                    {
                        int temp = arr[i];
                        arr[i] = arr[i-1];
                        arr[i-1] = temp;
                    }
                }
            }
            return arr;
        }

        static List<int> QuickSort(List<int> arr) 
        {
            // divide list using pivot, right and left segments; call recursively on right and left segments
            int len = arr.Count;
            if (len <= 1)
            {
                return arr;
            }
            int pivot;
            List<int> left = new List<int>();
            List<int> right = new List<int>();
            pivot = arr[0];
            for (int i=1; i<len; i++)
            {
                if (arr[i] < pivot) 
                {
                    left.Add(arr[i]);
                }
                else
                {
                    right.Add(arr[i]);
                }
            }
            List<int> combine = new List<int>();
            combine.AddRange(QuickSort(left));
            combine.Add(pivot);
            combine.AddRange(QuickSort(right));
            return combine;
        }
    }
}
