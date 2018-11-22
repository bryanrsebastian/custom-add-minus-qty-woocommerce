( function( $ ) {
    $.noConflict();
    
    /**
     * Custom add/minus quantity for WooCommerce
     */
    
    /* Initialize the variables */
    var step = parseInt( $( 'input[name="quantity"]' ).attr( 'step' ) ), // Step when you add/minus of quantity
        min = parseInt( $( 'input[name="quantity"]' ).attr( 'min' ) ), // Minimum quantity allowed
        max = parseInt( $( 'input[name="quantity"]' ).attr( 'max' ) ), // Maximum quantity allowed
        qty; // Initialize the quantity variable

    /* Increasing of quantity */
    $( '.__add_qty' ).on( 'click', function() {
        /* Get the current quantity to refresh the qty variable */
        qty = parseInt( $( 'input[name="quantity"]' ).val() );

        /* Increace the quantity */
        qty += step;

        /**
         * In case the maximum value is not set, we will make it unlimited
         * or
         * Check if the new quantity is not less than maximum value
         */
        if ( isNaN( max ) || qty <= max )
            $( 'input[name="quantity"]' ).val( qty );            
    } );

    /* Decreasing of quantinty */
    $( '.__minus_qty' ).on( 'click', function() {
        /* Get the current quantity to refresh the qty variable */
        qty = parseInt( $( 'input[name="quantity"]' ).val() );

        /* Increace the quantity */
        qty -= step;

        /**
         * In case the minimum value is not set, we will make it unlimited
         * or
         * Check if the new quantity is not greater than maximum value
         */
        if ( isNaN( min ) || qty >= min )
            $( 'input[name="quantity"]' ).val( qty ); 
    } );
} ) ( jQuery )