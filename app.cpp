// Convert from Fahrenheit to Celsius and vice versa
#include <iostream>
#include <cctype>
using namespace std;

int main()
{
    char ts;
    cout << "Enter the temperature system you want to use.\nf= Fahrenheit\nc= Celsius: ";
    cin >> ts;
    ts = tolower(ts);
    if (ts == 'f')
    {
        float fah;
        float cls;
        cout << "enter a temperature in Fahrenheit:  ";
        cin >> fah;
        cls = ((fah - 32) * 5) / 9;
        cout << "temperature in celsius = " << cls;
    }
    else if (ts == 'c')
    {
        float cls;
        float fah;
        cout << "enter a temperature in celsius: ";
        cin >> cls;
        fah = ((cls * 9) / 5) + 32;
        cout << "\ntemperature in Fahrenheit= " << fah;
    }
    else
    {
        cout << "the temperature system you entered is wrong, pls try again:)" << endl;
    }

    return 0;
}
