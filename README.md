# angular-currency
A simple bootstrap dropdown for selecting from world currencies

# Usage
Make sure to include 'CurrencySelecter' as a dependency in your angular module.

To implement the selecter in your markup, use the following syntax:
`<currency-selecter ng-model="myCurrency"></currency-selecter>`

# Options

**Default Currency**

The following syntax will make US Dollars your default currency (selected automatically)
`<currency-selecter ng-model="myCurrency" default-currency="USD"></currency-selecter>`

**Preferred Currencies**

Use preferred currencies to always display your preferred currencies at the top of the list
`<currency-selecter ng-model="myCurrency" preferred-currencies="SEK,NOK,EUR"></currency-selecter>`

**Include/Exclude Currencies**

Use include-currencies or exclude-currencies if you wish to specify explicitly which currencies to display or not to display in the list.
Example:
`<currency-selecter include-currencies="SEK,NOK,EUR,USD,GBP" preferred-currencies="SEK,NOK,EUR" default-currency="SEK" ng-model="myCurrency"></currency-selecter>`
