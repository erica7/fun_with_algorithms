using System;
using System.Collections.Generic;
using System.Linq;

namespace arraysAndStrings
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            // // SUM SEQUENCE
            // Console.WriteLine(SumSequence(2,2,2));  // 2
            // Console.WriteLine(SumSequence(2,6,2));  // 12
            // Console.WriteLine(SumSequence(1,5,1));  // 15
            // Console.WriteLine(SumSequence(1,5,3));  // 5
            // Console.WriteLine(SumSequence(9,5,3));  // 0

            // // RANGES
            // int[] rangesTestCase = {-3, -2, -1, 4, 6, 7, 9, 10, 11, 15};
            // Console.WriteLine(Ranges(rangesTestCase));  // -3--1,4,6,7,9-11,15

            // // XO 
            // Console.WriteLine(Xo("xo"));  // True
            // Console.WriteLine(Xo("xxOo"));  // True
            // Console.WriteLine(Xo("xxxm"));  // False
            // Console.WriteLine(Xo("Oo"));  // False
            // Console.WriteLine(Xo("ooom"));  // False

            // // PEAKS
            // int[] testCase = {5,2,3,6,4,1,2,3,2,1,4};  // should return { pos: [ 3, 7 ], peaks: [ 6, 3 ] }
            // int[] testCase2 = {1,2,2,1};  // should return { pos: [ 1 ], peaks: [ 2 ] }
            // int[] testCase3 = {1,2,2,3};  // should return empty arrays { pos: [], peaks: [] }
            // int[] testCase4 = {0,1,2,5,1,0};  // should return empty arrays { pos: [ 3 ], peaks: [ 5 ] }
            // int[] testCase5 = {5,2,3,6,4,1,2,3,2,1,4,1,2,2,3};  // should return { pos: [ 3, 7, 10 ], peaks: [ 6, 3, 4 ] }
            // List<int>[] testCaseRet = Peaks(testCase5);
            // Console.Write("pos:   ");
            // testCaseRet[0].ForEach(item => Console.Write("{0}  ", item));
            // Console.WriteLine();
            // Console.Write("peaks: ");
            // testCaseRet[1].ForEach(item => Console.Write("{0}  ", item));
            // Console.WriteLine();

            // // UNIQUE IN ORDER
            // var testCaseRet0 = UniqueInOrder("");                                    // => ""
            // var testCaseRet = UniqueInOrder("AAAABBBCCDAABBB");                      // => "ABCDAB"
            // var testCaseRet2 = UniqueInOrder("ABBCcAD");                             // => "ABCcAD"
            // var testCaseRet3 = UniqueInOrder("12233");                               // => "123"
            // var testCaseRet4 = UniqueInOrder(new List<double> {1.1, 2.2, 2.2, 3.3}); // => new List<double> {1.1, 2.2, 3.3}
            // testCaseRet0.ToList().ForEach(item => Console.Write("{0}  ", item)); Console.WriteLine();
            // testCaseRet.ToList().ForEach(item => Console.Write("{0}  ", item)); Console.WriteLine();
            // testCaseRet2.ToList().ForEach(item => Console.Write("{0}  ", item)); Console.WriteLine();
            // testCaseRet3.ToList().ForEach(item => Console.Write("{0}  ", item)); Console.WriteLine();
            // testCaseRet4.ToList().ForEach(item => Console.Write("{0}  ", item)); Console.WriteLine();

            // ACCUMULATE
            Console.WriteLine(Accumulate("ZpglnRxqenU"));  // => "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
            Console.WriteLine(Accumulate("NyffsGeyylB"));  // => "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
            Console.WriteLine(Accumulate("MjtkuBovqrU"));  // => "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
            Console.WriteLine(Accumulate("EvidjUnokmM"));  // => "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
            Console.WriteLine(Accumulate("HbideVbxncC"));  // => "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");

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

        public static IEnumerable<T> UniqueInOrder<T>(IEnumerable<T> iterable)
        {
            
            List<T> a = new List<T>();
            IComparer<T> elementComparer = Comparer<T>.Default; 
            using(IEnumerator<T> iter = iterable.GetEnumerator())
            {
                if (!iter.MoveNext())  // check for empty input: return empty List 
                {
                    return a;
                }
                iter.MoveNext();  // move to first element of iterable
                var temp = iter.Current;  // set temp equal to first element of iterable
                while (iter.MoveNext()) {  // executes iter.MoveNext(); no need to call within the while loop
                    var current = iter.Current;
                    // Console.WriteLine("temp: {0} | current: {1}", temp, current);
                    int comparison = elementComparer.Compare(temp, current);
                    if (comparison != 0)  // different
                    {
                        a.Add(temp);
                        temp = iter.Current;
                    }
                }
                a.Add(temp);
            }
            return a;
        }

        public static String Accumulate(string s) 
        {
            int len = s.Length;
            string a = "";
            for (int i = 0; i < len; i++)
            {
                a += Char.ToUpper(s[i]);
                for (int n = 0; n < i; n++)
                {
                    a += Char.ToLower(s[i]);
                }
                if (i < len-1)
                {
                    a += "-";
                }
            }
            return a;
        }
    }
}
