#include <iostream>
using namespace std;

int main()
{
    int num1;
    int num2;
    int num3;
    cout << "Enter 3 numbers and I will find the greatest number of them: ";
    cout << "Enter the first number: ";
    cin >> num1;
    cout << "Enter the second number: ";
    cin >> num2;
    cout << "Enter the third number: ";
    cin >> num3;

    if ((num1 > num2 && num1 > num3) || (num1 > num2 && num2 == num3))
    {
        cout << "\nThe first number " << num1 << " is the greatest number.";
    }
    else if ((num2 > num1 && num2 > num3) || (num2 > num1 && num1 == num3))
    {
        cout << "\nThe second number " << num2 << " is the greatest number.";
    }
    else if ((num3 > num1 && num3 > num2) || (num3 > num1 && num1 == num2))
    {
        cout << "\nThe third number " << num3 << " is the greatest number.";
    }
    else if (num3 == num1 && num2 == num3)
    {
        cout << "All numbers are equal.";
    }

    return 0;
}    
