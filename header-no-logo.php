<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package cyberize-app-dev
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="profile" href="https://gmpg.org/xfn/11">

  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
  <?php wp_body_open(); ?>
  <div class="site">
    <a class="skip-link screen-reader-text"
      href="#primary"><?php esc_html_e( 'Skip to content', 'cyberize-app-dev' ); ?></a>

    <header id="" class="site-header">
      <!-- Moose_Framework_2 NAVIGATION GOES HERE -->

      <div class="main-navigation">
        <div class="main-navbar container-fluid">
          <a class="navbar-logo" href="<?php echo esc_url( home_url( '/' ) ); ?>">
            <img src="/wp-content/uploads/2020/08/moose-oragebg.png" class="w-25" style="padding-top: .8rem;" alt="">
          </a>
          <?php
					wp_nav_menu( array(
						'theme_location' => 'menu-1', // Defined when registering the menu
						'menu_id'        => 'primary-menu',
						'container'			 => 'div',
						'container_class' => 'main-nav',  	
						// 'menu_class'     => 'mx-auto', //CENTER ALIGN
						// 'menu_class'     => 'ml-auto', //RIGHT ALIGN
						'menu_class'     => 'mr-auto', //LEFT ALIGN
					) );
        ?>
          <section>
            <?php global $current_user; wp_get_current_user(); ?>
            <?php if ( is_user_logged_in() ) { 
            // echo 'Username: ' . $current_user->user_login . "\n"; 
            echo '<span class="float-right">User: ' . $current_user->user_login . "</span>"; } 
            else { 
              //wp_loginout(); 
            } 
            ?>
          </section>
        </div>
      </div>


      <!-- Moose_Framework_2 NAVIGATION ENDS HERE -->

    </header><!-- #masthead -->