var gulp = require('gulp');
var uglify = require('gulp-uglify');
var templateCache = require('gulp-angular-templatecache');
var jScrambler = require('gulp-jscrambler');


gulp.task('scripts', function() {
  gulp.src(['./www/build/main.js'])
  .pipe(uglify())
  .pipe(gulp.dest('./www/build'));
});


gulp.task('obfuscation', function() {
  gulp.src('./www/build/main.js')
  .pipe(jScrambler({
    "keys": {
      "accessKey": '0EA6CE2E959C41A7458E69AD31E52631901D242C',
      "secretKey": 'FE6D51004C2B0F0B99F87F3D73E6397977C61BCF'
    },
    "applicationId":"57f39ca44e9175a700483b47",
    "params":[
      {
        "name": "whitespaceRemoval"
      },
      {
        "name": "identifiersRenaming",
        "options": {
          "mode": "SAFEST"
        }
      },
      {
        "name": "duplicateLiteralsRemoval"
      },
      {
        "name": "functionReordering"
      },
      {
        "name": "dotToBracketNotation"
      },
      {
        "name": "functionOutlining"
      },
      {
        "name": "booleanToAnything"
      },
      {
        "name": "stringSplitting",
        "options": {
          "chunk": 0.25
        }
      },
      {
        "name": "propertyKeysReordering"
      },
      {
        "name": "propertyKeysObfuscation"
      }
    ],
    "areSubscribersOrdered": false,
    "applicationTypes": {
      "webBrowserApp": false,
      "desktopApp": false,
      "serverApp": false,
      "hybridMobileApp": true,
      "javascriptNativeApp": false,
      "html5GameApp": false
    },
    "languageSpecifications": {
      "es5": true,
      "es6": true,
      "es7": false
    }
  }))
  .pipe(gulp.dest('./'));
});