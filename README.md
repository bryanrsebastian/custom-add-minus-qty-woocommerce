# Custom Add/Minus Product Quantity
Custom Add/Minus Product Quantity is a jQuery snippet to custom the default add/minus product quantity of a WooCommerce Product in single page.

Please be noted that this plugin use a third party library ( [jQuery.js](https://jquery.com/download/) ).

### Installation
1. Download [jQuery.js](https://jquery.com/download/) library and include it.
3. Download the Custom Add/Minus Product Quantity snippet and include it.

### How to Use
1. Add your custom Add/Minus button in `wp-content/themes/your-theme/woocommerce-template/single-product/add-to-cart/simple.php`.
2. Add a `__add_qty/__minus_qty` class to your custom Add/Minus button.
3. Hide the up/down of the default quantity input by using this css style:
```sh
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none; 
    margin: 0; 
}
```

### Contributing
For a pull request to be considered it must resolve a bug, or add a feature which is beneficial to a large audience.

Requests must be made against the develop branch. Pull requests submitted against the master branch will not be considered.

All pull requests are subject to approval by the repository owners, who have sole discretion over acceptance or denial.

### License
Custom Add/Minus Product Quantity is under MIT license - http://www.opensource.org/licenses/mit-license.php