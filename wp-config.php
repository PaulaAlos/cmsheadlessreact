<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'portfolio_cmsheadless_reactwp' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'u1h?(V`,A!&s&4HffX`P,q<_%<~reG%)`PXMT6o(Iva7Fg(/sc1n|Yb%ph7?`PvG' );
define( 'SECURE_AUTH_KEY',  'o)Yq|zFh JF[P(8P-3 S6#_gBw*rZ%BwSPdh[em-zJwd]vMK{5/fY~~4&@Fu*Mq%' );
define( 'LOGGED_IN_KEY',    'lsdXW_Je$2Tt9+PiSjY&_p(n-2sF(*,x4JqE!=A^j:Yq&x/A~EF~5npn2 =^pi<~' );
define( 'NONCE_KEY',        'ld?/xi Am6Ks9WFXtW/_xih++k!cO|R+S?W(rt`|4ynaOO`1S )H@749H),MLPct' );
define( 'AUTH_SALT',        'b0x`8Z2%Lq{drsS!%^Bz(7}N`~Ab;_MTv-{i$l<9b^5 (q/VFLL,9n7Vh~=<Kj#X' );
define( 'SECURE_AUTH_SALT', 'iiAx3i#!7.h1+p < ^O!a>43[I/{E}VxF?ZCYM$&6= CX; Rbk`g[J` n#6SwX`j' );
define( 'LOGGED_IN_SALT',   '=oVMoDn_fw@t  cN$0pRCt+LX0=@Su8fy? Sx[Prz7Hye+Bd{g:Xfg ssp88}DN)' );
define( 'NONCE_SALT',       'NGCY!5FCDSLGZ#T6O9NHxvI79/J -`?c&:j#D*2drKN[%0Lc9_D]r~oJ<V=G/V0g' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
