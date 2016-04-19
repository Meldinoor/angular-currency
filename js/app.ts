﻿module CurrencyModule {
    var Currencies = Object.freeze({
        "AFN": "Afghani",
        "EUR": "Euro",
        "ALL": "Lek",
        "DZD": "Algerian Dinar",
        "USD": "US Dollar",
        "AOA": "Kwanza",
        "XCD": "East Caribbean Dollar",
        "ARS": "Argentine Peso",
        "AMD": "Armenian Dram",
        "AWG": "Aruban Florin",
        "AUD": "Australian Dollar",
        "AZN": "Azerbaijanian Manat",
        "BSD": "Bahamian Dollar",
        "BHD": "Bahraini Dinar",
        "BDT": "Taka",
        "BBD": "Barbados Dollar",
        "BYR": "Belarusian Ruble",
        "BZD": "Belize Dollar",
        "XOF": "CFA Franc BCEAO",
        "BMD": "Bermudian Dollar",
        "INR": "Indian Rupee",
        "BTN": "Ngultrum",
        "BOB": "Boliviano",
        "BOV": "Mvdol",
        "BAM": "Convertible Mark",
        "BWP": "Pula",
        "NOK": "Norwegian Krone",
        "BRL": "Brazilian Real",
        "BND": "Brunei Dollar",
        "BGN": "Bulgarian Lev",
        "BIF": "Burundi Franc",
        "CVE": "Cabo Verde Escudo",
        "KHR": "Riel",
        "XAF": "CFA Franc BEAC",
        "CAD": "Canadian Dollar",
        "KYD": "Cayman Islands Dollar",
        "CLP": "Chilean Peso",
        "CLF": "Unidad de Fomento",
        "CNY": "Yuan Renminbi",
        "COP": "Colombian Peso",
        "COU": "Unidad de Valor Real",
        "KMF": "Comoro Franc",
        "CDF": "Congolese Franc",
        "NZD": "New Zealand Dollar",
        "CRC": "Costa Rican Colon",
        "HRK": "Kuna",
        "CUP": "Cuban Peso",
        "CUC": "Peso Convertible",
        "ANG": "Netherlands Antillean Guilder",
        "CZK": "Czech Koruna",
        "DKK": "Danish Krone",
        "DJF": "Djibouti Franc",
        "DOP": "Dominican Peso",
        "EGP": "Egyptian Pound",
        "SVC": "El Salvador Colon",
        "ERN": "Nakfa",
        "ETB": "Ethiopian Birr",
        "FKP": "Falkland Islands Pound",
        "FJD": "Fiji Dollar",
        "XPF": "CFP Franc",
        "GMD": "Dalasi",
        "GEL": "Lari",
        "GHS": "Ghana Cedi",
        "GIP": "Gibraltar Pound",
        "GTQ": "Quetzal",
        "GBP": "Pound Sterling",
        "GNF": "Guinea Franc",
        "GYD": "Guyana Dollar",
        "HTG": "Gourde",
        "HNL": "Lempira",
        "HKD": "Hong Kong Dollar",
        "HUF": "Forint",
        "ISK": "Iceland Krona",
        "IDR": "Rupiah",
        "XDR": "SDR (Special Drawing Right)",
        "IRR": "Iranian Rial",
        "IQD": "Iraqi Dinar",
        "ILS": "New Israeli Sheqel",
        "JMD": "Jamaican Dollar",
        "JPY": "Yen",
        "JOD": "Jordanian Dinar",
        "KZT": "Tenge",
        "KES": "Kenyan Shilling",
        "KPW": "North Korean Won",
        "KRW": "Won",
        "KWD": "Kuwaiti Dinar",
        "KGS": "Som",
        "LAK": "Kip",
        "LBP": "Lebanese Pound",
        "LSL": "Loti",
        "ZAR": "Rand",
        "LRD": "Liberian Dollar",
        "LYD": "Libyan Dinar",
        "CHF": "Swiss Franc",
        "MOP": "Pataca",
        "MKD": "Denar",
        "MGA": "Malagasy Ariary",
        "MWK": "Malawi Kwacha",
        "MYR": "Malaysian Ringgit",
        "MVR": "Rufiyaa",
        "MRO": "Ouguiya",
        "MUR": "Mauritius Rupee",
        "XUA": "ADB Unit of Account",
        "MXN": "Mexican Peso",
        "MXV": "Mexican Unidad de Inversion (UDI)",
        "MDL": "Moldovan Leu",
        "MNT": "Tugrik",
        "MAD": "Moroccan Dirham",
        "MZN": "Mozambique Metical",
        "MMK": "Kyat",
        "NAD": "Namibia Dollar",
        "NPR": "Nepalese Rupee",
        "NIO": "Cordoba Oro",
        "NGN": "Naira",
        "OMR": "Rial Omani",
        "PKR": "Pakistan Rupee",
        "PAB": "Balboa",
        "PGK": "Kina",
        "PYG": "Guarani",
        "PEN": "Sol",
        "PHP": "Philippine Peso",
        "PLN": "Zloty",
        "QAR": "Qatari Rial",
        "RON": "Romanian Leu",
        "RUB": "Russian Ruble",
        "RWF": "Rwanda Franc",
        "SHP": "Saint Helena Pound",
        "WST": "Tala",
        "STD": "Dobra",
        "SAR": "Saudi Riyal",
        "RSD": "Serbian Dinar",
        "SCR": "Seychelles Rupee",
        "SLL": "Leone",
        "SGD": "Singapore Dollar",
        "XSU": "Sucre",
        "SBD": "Solomon Islands Dollar",
        "SOS": "Somali Shilling",
        "SSP": "South Sudanese Pound",
        "LKR": "Sri Lanka Rupee",
        "SDG": "Sudanese Pound",
        "SRD": "Surinam Dollar",
        "SZL": "Lilangeni",
        "SEK": "Swedish Krona",
        "CHE": "WIR Euro",
        "CHW": "WIR Franc",
        "SYP": "Syrian Pound",
        "TWD": "New Taiwan Dollar",
        "TJS": "Somoni",
        "TZS": "Tanzanian Shilling",
        "THB": "Baht",
        "TOP": "Pa’anga",
        "TTD": "Trinidad and Tobago Dollar",
        "TND": "Tunisian Dinar",
        "TRY": "Turkish Lira",
        "TMT": "Turkmenistan New Manat",
        "UGX": "Uganda Shilling",
        "UAH": "Hryvnia",
        "AED": "UAE Dirham",
        "UYU": "Peso Uruguayo",
        "UYI": "Uruguay Peso en Unidades Indexadas (URUIURUI)",
        "UZS": "Uzbekistan Sum",
        "VUV": "Vatu",
        "VEF": "Bolívar",
        "VND": "Dong",
        "YER": "Yemeni Rial",
        "ZMW": "Zambian Kwacha",
        "ZWL": "Zimbabwe Dollar"
    });

    interface IScopeWithCurrencySelecterController extends ng.IScope {
        ctrl: CurrencySelecterController;
    }

    class CurrencySelecterController {
        public static $inject = [];
        public ngModel: ng.INgModelController;

        constructor() {
            
        }

        selectCurrency = (newCurrency: string) => {
            this.ngModel.$setViewValue(newCurrency);
        }
    }

    function CurrencySelecterDirective(): ng.IDirective {
        return {
            restrict: 'E',
            require: 'ngModel',
            bindToController: true,
            controllerAs: 'ctrl',
            controller: CurrencySelecterController,
            compile: function (element: ng.IAugmentedJQuery, attr: ng.IAttributes, transclude: ng.ITranscludeFunction) {
                var preferredCurrencies: string[] = [];
                var includeCurrencies: string[] = [];
                var excludeCurrencies: string[] = [];
                var dropdownClass: string = 'dropdown';

                if (attr['preferredCurrencies']) {
                    if (typeof attr['preferredCurrencies'] === 'array')
                        preferredCurrencies = attr['preferredCurrencies'];
                    else
                        preferredCurrencies = attr['preferredCurrencies'].toString().split(',');
                }

                if (attr['includeCurrencies']) {
                    if (typeof attr['includeCurrencies'] === 'array')
                        includeCurrencies = attr['includeCurrencies'];
                    else
                        includeCurrencies = attr['includeCurrencies'].toString().split(',');
                }

                if (attr['excludeCurrencies']) {
                    if (typeof attr['excludeCurrencies'] === 'array')
                        excludeCurrencies = attr['excludeCurrencies'];
                    else
                        excludeCurrencies = attr['excludeCurrencies'].toString().split(',');
                }

                if (attr['direction']) {
                    if (attr['direction'].toLowerCase() === 'up')
                        dropdownClass = 'dropup';
                }

                var options: string =
                    '<div class="' + dropdownClass + '"><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">{{ctrl.ngModel.$viewValue}}<span class="caret"></span></button>'
                    + '<ul class="dropdown-menu currency-selecter-scrollable-menu">';

                if (preferredCurrencies.length) {
                    for (var i = 0; i < preferredCurrencies.length; ++i) {
                        if (Currencies[preferredCurrencies[i].toUpperCase()] !== void 0) {
                            var ucPc = preferredCurrencies[i].toUpperCase();
                            options += '<li><a href="" ng-click="ctrl.selectCurrency(\'' + Currencies[ucPc] + ' (' + ucPc + ')\')" role="button">' + Currencies[ucPc] + ' (' + ucPc + ')</a></li>';
                        }
                    }
                    options += '<li role="separator" class="divider"></li>';
                }

                for (var key in Currencies) {
                    if ((!Currencies.hasOwnProperty(key) || preferredCurrencies.some((c, idx, arr) => c.toUpperCase() === key))
                        || excludeCurrencies.some((c, idx, arr) => c.toUpperCase() === key)
                        || (includeCurrencies.length !== 0 && !includeCurrencies.some((c, idx, arr) => c.toUpperCase() === key)))
                        continue;

                    options += '<li><a href="" ng-click="ctrl.selectCurrency(\'' + Currencies[key] + ' (' + key + ')\')" role="button">' + Currencies[key] + ' (' + key + ')</a></li>';
                }

                element.append(options);

                return {
                    pre: (scope: IScopeWithCurrencySelecterController, element: ng.IAugmentedJQuery, attr: ng.IAttributes, ngModel: ng.INgModelController) => {
                        var defaultCurrency = null;

                        if (attr['defaultCurrency']) {
                            defaultCurrency = attr['defaultCurrency'].toString();
                        }                        

                        ngModel.$formatters.push(m => Currencies[m] + ' (' + m + ')');
                        ngModel.$parsers.push(v => v.substr(v.lastIndexOf('(') + 1, 3));

                        if (!ngModel.$modelValue && defaultCurrency) {
                            ngModel.$setViewValue(Currencies[defaultCurrency] + ' (' + defaultCurrency + ')');
                        }

                        scope.ctrl.ngModel = ngModel;
                    }
                }
            }
        }
    }

    angular.module('CurrencySelecter', []).directive('currencySelecter', CurrencySelecterDirective).constant('currencyConfig', {

    });
}