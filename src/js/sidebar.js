$.shaft = function ( menu )
{
    // credit goes to the unknown author
    var animationSpeed = 300, subMenuSelector = '.sidebar-submenu';

    $( menu ).on( 'click', 'li a', function ( e )
    {
        var $this = $( this );
        var checkElement = $this.next();

        if ( checkElement.is( subMenuSelector ) && checkElement.is( ':visible' ) )
        {
            checkElement.slideUp( animationSpeed, function ()
            {
                checkElement.removeClass( 'menu-open' );
            } );
            checkElement.parent( "li" ).removeClass( "active" );
        }

        else if ( ( checkElement.is( subMenuSelector ) ) && ( !checkElement.is( ':visible' ) ) )
        {
            var parent = $this.parents( 'ul' ).first();
            var ul = parent.find( 'ul:visible' ).slideUp( animationSpeed );
            ul.removeClass( 'menu-open' );
            var parent_li = $this.parent( "li" );

            checkElement.slideDown( animationSpeed, function ()
            {
                checkElement.addClass( 'menu-open' );
                parent.find( 'li.active' ).removeClass( 'active' );
                parent_li.addClass( 'active' );
            } );
        }
        if ( checkElement.is( subMenuSelector ) )
        {
            e.preventDefault();
        }
    } );
};


$( function ()
{
    window.previousWidth = $( 'html' ).width();

    $( ".menu-toggle" ).click( function ( e )
    {
        e.preventDefault();
        $( "#wrapper" ).toggleClass( "toggled" );

        if ( $( 'html' ).width() >= 768 )
        {

            if ( $( "#wrapper" ).hasClass( "toggled" ) )
            {
                $( "#sidebar-wrapper > *" ).fadeOut( 150 );
            }
            else
            {
                setTimeout( function ()
                {
                    $( "#sidebar-wrapper > *" ).fadeIn( 250 );
                }, 200 );
            }

        }
        else
        {

            if ( $( "#wrapper" ).hasClass( "toggled" ) )
            {
                setTimeout( function ()
                {
                    $( "#sidebar-wrapper > *" ).fadeIn( 250 );
                }, 200 );
            }
            else
            {
                setTimeout( function ()
                {
                    $( "#sidebar-wrapper > *" ).fadeOut( 150 );
                }, 0 );
            }

        }

        $( "html, body" ).animate( { scrollTop: "0" } );
    } );

    $( window ).resize( function ( e )
    {
        if ( ( $( 'html' ).width() >= 768 && window.previousWidth < 768 ) || ( $( 'html' ).width() < 768 && window.previousWidth >= 768 ) )
        {
            $( "#wrapper" ).toggleClass( "toggled" );
        }
        window.previousWidth = $( 'html' ).width();
    } );
} )

