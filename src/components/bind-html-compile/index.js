import angular from 'angular';
import bindHtmlCompile from './bind-html-compile.ctrl';

export default angular
    .module('component.ui.' + bindHtmlCompile.name, [])
    .directive(bindHtmlCompile.name, bindHtmlCompile)
    .name;
