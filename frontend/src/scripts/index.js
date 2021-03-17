import '../styles/index.scss';

import $ from "jquery/dist/jquery.slim";
import "bootstrap/dist/js/bootstrap.bundle";

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

$(document).ready(function () {
  window.console.log("dom ready");
});

console.log('webpack starterkit');
