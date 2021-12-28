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
  <div id="page" class="site">
    <a class="skip-link screen-reader-text"
      href="#primary"><?php esc_html_e( 'Skip to content', 'cyberize-app-dev' ); ?></a>

    <header id="header-list" class="site-header container py-5 text-center">

      <figure class="logo-container">

        <a href="/list-insert" class="list-links display-4 d-block">LIST</a>

        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
          <img class="mx-auto d-block" src="/wp-content/uploads/2020/07/SelfListLogo.png" alt="">
        </a>

      </figure>

    </header><!-- #masthead -->