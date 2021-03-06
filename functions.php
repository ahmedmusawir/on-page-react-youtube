<?php
// ADDING USER ROLES TO THE REST API
function get_user_roles($object, $field_name, $request)
{
 return get_userdata($object['id'])->roles;
}

add_action('rest_api_init', function () {
 register_rest_field('user', 'roles', array(
  'get_callback'    => 'get_user_roles',
  'update_callback' => null,
  'schema'          => array(
   'type' => 'array'
  )
 ));
});

add_filter('wp_is_application_passwords_available', '__return_true');

/**
 * Theme Setup Functions
 */
require get_template_directory() . '/_functions/theme-setup.php';

/**
 * Widget Setup Functions
 */
require get_template_directory() . '/_functions/widget-setup.php';

/**
 * Enqueue scripts and styles.
 */
require get_template_directory() . '/_functions/scripts-setup.php';

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/*
 * Load Jetpack compatibility file.
 */
if (defined('JETPACK__VERSION')) {
 require get_template_directory() . '/inc/jetpack.php';
}

/*======================================
=            MOOSE INCLUDES            =
======================================*/

/**
 * Bootstrap 4 Nav Walker
 */
// require get_template_directory() . '/_functions/bootstrap-navwalker.php';
// require get_template_directory() . '/_functions/moose-navwalker.php';
/**
 * Helper Functions
 */
require get_template_directory() . '/_functions/helpers-setup.php';


/**
 *
 * CUSTOMIZING THE LOGIN SCREEN
 *
 */
require get_template_directory() . '/_functions/wp-logon-screen.php';

/**
 *
 * WP AJAX INSERT WITH REACT
 *
 */
require get_template_directory() . '/_functions/selflist/ajax/test-wp-ajax-function.php';