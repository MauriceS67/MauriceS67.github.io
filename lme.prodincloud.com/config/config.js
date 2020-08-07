/**
 * This file is part dashboard-app project.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

(function (App) {

  'use strict';

  App.Config = {

    dev: false,
    test: false,

    /** The company name , used in the login dialog */
    company: 'Prodin',

    namespace: 'LME',

    /* Config adapter */
    adapter: 'APIAdapter',

    /**
     * if you are running the application from subdir then you need
     * to change the following option to meet your subdir name
     */
    base: '/',

    /**
     * True to use hash for paths , false to stick to normal urls
     *
     * Note : if you want to use normal urls then you need to setup your server
     *        to redirect all requests to index.html file , cause the views are
     *        not physical files which can be handled by the server.
     **/
    useHashAsPath: true,

    /** User markdown when it is supported */
    enableMakrdown: true,

    /** True show the logo provided for the current namespace , false to hide compleletly */
    showNamespaceLogo: false,

    /** True to enable the object search model in the toolbar */
    enableObjectsSearch: true,

    /** True to enable password rest in the login dialog and user menu */
    enablePasswordForgot: true,
    enablePasswordChange: true,

    /** Show "All Locations" in cp-relations-filter  */
    addAllLocationsInRelationsFilter: true,

    /*
     * API Condfiguration
     *
     * The config object contains the main endpoints used in this app.
     * some endpoints contian placehodlers , these placehodlers will
     * be replaced in real time.
     */
    api: {

      /** the base URL MUST ALWAYS ends with forward slash '/' */
      base: 'https://lme.prodincloud.com/rest/',
      debounce: 500,
      endpoints: {
        'Widget': 'Widgets',
        'Relations': 'Relations/:id',
        'DataSourceData': 'DataSourceData/:id',
        'ServiceCalls': 'LME_ServiceCalls/:id',
        'ServiceCallsLookup': 'LME_ServiceCalls/_lookup/:entity',
        'ServiceObjects': 'LME_ServiceObjects/:id',
        'ServiceObjectsLookup': 'LME_ServiceObjects/_lookup/:entity',
        'ServiceObjectHistory': 'ServiceObjectMaintenanceHistory',
        'Checklist': 'Checklists/:id/_output_/:fname',
        'Archives': 'Archives/:entity/:id/:archive',
        'ArchivesAttachment': 'Archives/:entity/:id/:archive/_output_/:fname',
        'Upload': '_upload',
        'Notes': 'Notes/:entity/:id/:note',
        'Config': 'Configurations/:realm/:user/:key/:setting/',
        'ServiceObjectStatuses': 'ServiceObjectStatuses?_SCOPE=B',
        'IsAuth': 'Sessions',
        'ResetPassword': 'resetPassword',
        'SetPassword': 'setPassword',
      },

      /**
       * The bc name in the frontend used to name components => the bc name in the backend
       *
       * Note : DO NOT change the keys , change the values only , the keys are used by
       *        the forntend to detect the right component for every bc.
       */
      BCNameMapping: {
        'ServiceObjects': 'LME_DWH_ServiceObjects',
        'ServiceCalls': 'LME_ServiceCalls',
        'Maintenance':'LME_DWH_MaintenanceSchemes',
        'ServiceContractMaintenanceSchemeLines': 'ServiceContractMaintenanceSchemeLines'
      },

      /**
       * The bc name in the frontend used to name components => the label of the id coming from the backend
       *
       * Note : This config should be removed when All BCs has one name for IDs.
       *        The config is used in some places only when bc's content is generated
       *        dynamicall and we don't know which column is the IDs column.
       */
      BCIDValueMapping: {
        'ServiceObjects': 'SERVICEOBJECTID',
        'ServiceCalls': 'CALLID',
      },
    },

    firebase: {
      apiKey: "AIzaSyCa_hhGFawdhTfWmBHcW2BXBVaQnrolag8",
      authDomain: "prodindesktop-e8644.firebaseapp.com",
      databaseURL: "https://prodindesktop-e8644.firebaseio.com",
      projectId: "prodindesktop-e8644",
      storageBucket: "prodindesktop-e8644.appspot.com",
      messagingSenderId: "882425263883"
    },

    /** App Auth Configuration */
    Auth: {
      tokenKey: '_dashboard_token',
      userKey: '_dashboard_user',
      tokenExpires: 7,
    },

    dashboard: {

      /* A flag defined whether the dashboard can be edited / re-arranged from the UI or not */
      editable: true,
    },

    /*
     * Common Grid configuration
     * @see https://www.ag-grid.com/javascript-grid-properties/?framework=angular#gsc.tab=0
     */
    grid: {

      /** if license is set and valid the `ag-grid-enterprise` will be used instead of `ag-grid` */
      license: '',
      options: {

        /* Set to true to allow column resizing by dragging the mouse at a columns headers edge. */
        enableColResize: true,

        /*
         * Set to true when using In Memory Row Model to enable Row Sorting.
         * Clicking a column header will cause the grid to sort the data.
         */
        enableSorting: true,

        /* Set to true when using In Memory Row Model to enable Row Filtering. */
        enableFilter: true,

        /* Set to true to enable Row Animation. */
        animateRows: true,

        /*
         * If grouping, set to true or false .
         * If true, a group row will span all columns across the entire width of the table.
         * If false, the cells will be rendered as normal and you will have the opportunity to include a grouping column
         * (normally the first on the left) to show the group.
         */
        groupUseEntireRow: true,

        /*
         * True - Pagination is enabled.
         * False (Default) - Pagination is disabled.
         */
        pagination: false,

        /*
         * Number. How many rows to load per page. Default value = 100.
         * If paginationAutoPageSize is specified, this property is ignored.
         */
        paginationPageSize: 100,

        /** Type of Row Selection, set to either 'single' or 'multiple'. */
        rowSelection: 'multiple',

        /*
         * When to show the 'row group panel' (where you drag rows to group) at the top.
         * Default is never. Set to either 'always' or 'onlyWhenGrouping'
         */
        rowGroupPanelShow: 'never',

        /*
         * Set to true to always show the column menu button,
         * rather than only showing when the mouse is over the column header.
         */
        suppressMenuHide: false,

        /* Allows context menu to show, even when ctrl key is held down. */
        allowContextMenuWithControlKey: true,

        /* Set to true to show the Tool Panel by default. */
        showToolPanel: true,
        toolPanelSuppressPivots: false,
        toolPanelSuppressPivotMode: false,
        toolPanelSuppressValues: true,
      },
    },

    /** Localization config */
    i18n: {

      /** translation file path relative to root */
      locales: 'assets/locales.json',

      /** enable/disable lang switcher in toolbar */
      switcher: true,

      /**
       * Array of avaliable languages.
       *
       * @see locales.json
       */
      languages: [{
          code: 'en',
          name: 'English'
        },
        {
          code: 'de',
          name: 'Deutsch'
        },
        {
          code: 'nl',
          name: 'Dutch'
        }
      ],

      /** default langauge used if the logged in user has no default language saved */
      language: 'nl',

      /** a date format according to the current language */
      dateFormat: {
        'en': 'MM/DD/YYYY',
        'de': 'DD.MM.YYYY',
        'nl': 'DD-MM-YYYY',
      },

      /** a time format according to the current language */
      timeFormat: {
        'en': 'hh:mm:ss',
        'de': 'hh:mm:ss',
        'nl': 'hh:mm:ss',
      },

      /** a date , time combination format according to the current language */
      dateTimeFormat: {
        'en': 'MM/DD/YYYY hh:mm:ss',
        'de': 'DD.MM.YYYY hh:mm:ss',
        'nl': 'DD-MM-YYYY hh:mm:ss',
      },

      /**
       * Controlls number formating
       *
       * Note: Numbers coming from the backend like the widget counter values or numbers you
       *       can see in the grid will not be affected by this config as the backend send the
       *       `Scale` property which will be used as maximum and  minimum fractions digists
       */
      numberFormat: {

        // the maximum number of fraction digits to use. Possible values are from 0 to 20
        maximumFractionDigits: 0,

        //The minimum number of fraction digits to use. Possible values are from 0 to 20
        minimumFractionDigits: 0,
      },

      /** if true we try to detect the browser language and the fallback settings are used */
      autoDetect: false,

      /**
       * fallback settings
       * @see App.Config.i18n.autoDetect
       */
      fallback: {
        language: 'en',
        dateFormat: 'MM/DD/YYYY',
        timeFormat: 'hh:mm:ss',
        dateTimeFormat: 'MM/DD/YYYY hh:mm:ss'
      }
    }
  };
}(window.App = window.App || {}));
