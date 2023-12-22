package dom

import (
	"log"
	"fmt"
	"net/http"
)

func CssHandler_Default_237(w http.ResponseWriter, r *http.Request) {
	log.Print("CSS Handler")
	
	w.Header().Set("Content-Type", "text/css")
    fmt.Fprintf(w,"%s",`
    
		@charset "UTF-8";
		/*
		  Flavor name: Default (mini-default)
		  Author: Angelos Chalaris (chalarangelo@gmail.com)
		  Maintainers: Angelos Chalaris
		  mini.css version: v2.3.7
		*/
		/*
		  Browsers resets and base typography.
		*/
		html {
		  font-size: 16px;
		}
		
		html, * {
		  font-family: -apple-system, BlinkMacSystemFont,"Segoe UI","Roboto", "Droid Sans","Helvetica Neue", Helvetica, Arial, sans-serif;
		  line-height: 1.5;
		  -webkit-text-size-adjust: 100%;
		}
		
		* {
		  font-size: 1rem;
		}
		
		body {
		  margin: 0;
		  color: #212121;
		  background: #f8f8f8;
		}
		
		article, aside, section, figcaption, figure, main, details, menu {
		  display: block;
		}
		
		summary {
		  display: list-item;
		}
		
		abbr[title] {
		  border-bottom: none;
		  text-decoration: underline;
		}
		
		audio, video {
		  display: inline-block;
		}
		
		svg:not(:root) {
		  overflow: hidden;
		}
		
		input {
		  overflow: visible;
		}
		
		img {
		  max-width: 100%;
		  height: auto;
		}
		
		dfn {
		  font-style: italic;
		}
		
		h1, h2, h3, h4, h5, h6 {
		  line-height: 1.2em;
		  margin: 0.75rem 0.5rem;
		  font-weight: 500;
		}
		
		h1 small, h2 small, h3 small, h4 small, h5 small, h6 small {
		  color: #424242;
		  display: block;
		  margin-top: -0.25rem;
		}
		
		h1 {
		  font-size: 2rem;
		}
		
		h2 {
		  font-size: 1.6875rem;
		}
		
		h3 {
		  font-size: 1.4375rem;
		}
		
		h4 {
		  font-size: 1.1875rem;
		}
		
		h5 {
		  font-size: 1rem;
		}
		
		h6 {
		  font-size: 0.8125rem;
		}
		
		p {
		  margin: 0.5rem;
		}
		
		ol, ul {
		  margin: 0.5rem;
		  padding-left: 1rem;
		}
		
		b, strong {
		  font-weight: 700;
		}
		
		hr {
		  box-sizing: content-box;
		  border: 0;
		  overflow: visible;
		  line-height: 1.25em;
		  margin: 0.5rem;
		  height: 0.0625rem;
		  background: linear-gradient(to right, #bdbdbd, #8c8c8c, #bdbdbd);
		}
		
		blockquote {
		  display: block;
		  position: relative;
		  font-style: italic;
		  background: #eeeeee;
		  margin: 0.5rem;
		  padding: 0.5rem 0.5rem 1.5rem;
		  border-left: 0.25rem solid #505050;
		  border-radius: 0 0.125rem 0.125rem 0;
		}
		
		blockquote:after {
		  position: absolute;
		  font-style: normal;
		  font-size: 0.875rem;
		  color: #505050;
		  left: 0.625rem;
		  bottom: 0;
		  content: "— " attr(cite);
		}
		
		code, kbd, pre, samp {
		  font-family: monospace, monospace;
		}
		
		code {
		  border-radius: 0.125rem;
		  background: #e6e6e6;
		  padding: 0.125rem 0.25rem;
		}
		
		pre {
		  overflow: auto;
		  border-radius: 0 0.125rem 0.125rem 0;
		  background: #e6e6e6;
		  padding: 0.75rem;
		  margin: 0.5rem;
		  border-left: 0.25rem solid #1565c0;
		}
		
		kbd {
		  border-radius: 0.125rem;
		  background: #0c0c0c;
		  color: #fafafa;
		  padding: 0.125rem 0.25rem;
		}
		
		small, sup, sub {
		  font-size: 0.75em;
		}
		
		sup {
		  top: -0.5em;
		}
		
		sub {
		  bottom: -0.25em;
		}
		
		sup, sub {
		  line-height: 0;
		  position: relative;
		  vertical-align: baseline;
		}
		
		a {
		  color: #0277bd;
		  text-decoration: underline;
		  opacity: 1;
		  transition: opacity 0.3s;
		}
		
		a:visited {
		  color: #01579b;
		}
		
		a:hover, a:focus {
		  opacity: 0.75;
		}
		
		figcaption {
		  font-size: 0.8125rem;
		  color: #424242;
		}
		
		/*
		  Definitions for the grid system.
		*/
		.container {
		  margin: 0 auto;
		  padding: 0 0.75rem;
		}
		
		.row {
		  box-sizing: border-box;
		  display: -webkit-box;
		  -webkit-box-flex: 0;
		  -webkit-box-orient: horizontal;
		  -webkit-box-direction: normal;
		  display: -webkit-flex;
		  display: flex;
		  -webkit-flex: 0 1 auto;
		  flex: 0 1 auto;
		  -webkit-flex-flow: row wrap;
		  flex-flow: row wrap;
		}
		
		.col-sm,
		[class^='col-sm-'],
		[class^='col-sm-offset-'],
		.row[class*='cols-sm-'] > * {
		  box-sizing: border-box;
		  -webkit-box-flex: 0;
		  -webkit-flex: 0 0 auto;
		  flex: 0 0 auto;
		  padding: 0 0.25rem;
		}
		
		.col-sm,
		.row.cols-sm > * {
		  -webkit-box-flex: 1;
		  max-width: 100%;
		  -webkit-flex-grow: 1;
		  flex-grow: 1;
		  -webkit-flex-basis: 0;
		  flex-basis: 0;
		}
		
		.col-sm-1,
		.row.cols-sm-1 > * {
		  max-width: 8.33333%;
		  -webkit-flex-basis: 8.33333%;
		  flex-basis: 8.33333%;
		}
		
		.col-sm-2,
		.row.cols-sm-2 > * {
		  max-width: 16.66667%;
		  -webkit-flex-basis: 16.66667%;
		  flex-basis: 16.66667%;
		}
		
		.col-sm-3,
		.row.cols-sm-3 > * {
		  max-width: 25%;
		  -webkit-flex-basis: 25%;
		  flex-basis: 25%;
		}
		
		.col-sm-4,
		.row.cols-sm-4 > * {
		  max-width: 33.33333%;
		  -webkit-flex-basis: 33.33333%;
		  flex-basis: 33.33333%;
		}
		
		.col-sm-5,
		.row.cols-sm-5 > * {
		  max-width: 41.66667%;
		  -webkit-flex-basis: 41.66667%;
		  flex-basis: 41.66667%;
		}
		
		.col-sm-6,
		.row.cols-sm-6 > * {
		  max-width: 50%;
		  -webkit-flex-basis: 50%;
		  flex-basis: 50%;
		}
		
		.col-sm-7,
		.row.cols-sm-7 > * {
		  max-width: 58.33333%;
		  -webkit-flex-basis: 58.33333%;
		  flex-basis: 58.33333%;
		}
		
		.col-sm-8,
		.row.cols-sm-8 > * {
		  max-width: 66.66667%;
		  -webkit-flex-basis: 66.66667%;
		  flex-basis: 66.66667%;
		}
		
		.col-sm-9,
		.row.cols-sm-9 > * {
		  max-width: 75%;
		  -webkit-flex-basis: 75%;
		  flex-basis: 75%;
		}
		
		.col-sm-10,
		.row.cols-sm-10 > * {
		  max-width: 83.33333%;
		  -webkit-flex-basis: 83.33333%;
		  flex-basis: 83.33333%;
		}
		
		.col-sm-11,
		.row.cols-sm-11 > * {
		  max-width: 91.66667%;
		  -webkit-flex-basis: 91.66667%;
		  flex-basis: 91.66667%;
		}
		
		.col-sm-12,
		.row.cols-sm-12 > * {
		  max-width: 100%;
		  -webkit-flex-basis: 100%;
		  flex-basis: 100%;
		}
		
		.col-sm-offset-0 {
		  margin-left: 0;
		}
		
		.col-sm-offset-1 {
		  margin-left: 8.33333%;
		}
		
		.col-sm-offset-2 {
		  margin-left: 16.66667%;
		}
		
		.col-sm-offset-3 {
		  margin-left: 25%;
		}
		
		.col-sm-offset-4 {
		  margin-left: 33.33333%;
		}
		
		.col-sm-offset-5 {
		  margin-left: 41.66667%;
		}
		
		.col-sm-offset-6 {
		  margin-left: 50%;
		}
		
		.col-sm-offset-7 {
		  margin-left: 58.33333%;
		}
		
		.col-sm-offset-8 {
		  margin-left: 66.66667%;
		}
		
		.col-sm-offset-9 {
		  margin-left: 75%;
		}
		
		.col-sm-offset-10 {
		  margin-left: 83.33333%;
		}
		
		.col-sm-offset-11 {
		  margin-left: 91.66667%;
		}
		
		.col-sm-normal {
		  -webkit-order: initial;
		  order: initial;
		}
		
		.col-sm-first {
		  -webkit-order: -999;
		  order: -999;
		}
		
		.col-sm-last {
		  -webkit-order: 999;
		  order: 999;
		}
		
		@media screen and (min-width: 768px) {
		  .col-md,
		  [class^='col-md-'],
		  [class^='col-md-offset-'], .row[class*='cols-md-'] > * {
		    box-sizing: border-box;
		    -webkit-box-flex: 0;
		    -webkit-flex: 0 0 auto;
		    flex: 0 0 auto;
		    padding: 0 0.25rem;
		  }
		  .col-md,
		  .row.cols-md > * {
		    -webkit-box-flex: 1;
		    max-width: 100%;
		    -webkit-flex-grow: 1;
		    flex-grow: 1;
		    -webkit-flex-basis: 0;
		    flex-basis: 0;
		  }
		  .col-md-1,
		  .row.cols-md-1 > * {
		    max-width: 8.33333%;
		    -webkit-flex-basis: 8.33333%;
		    flex-basis: 8.33333%;
		  }
		  .col-md-2,
		  .row.cols-md-2 > * {
		    max-width: 16.66667%;
		    -webkit-flex-basis: 16.66667%;
		    flex-basis: 16.66667%;
		  }
		  .col-md-3,
		  .row.cols-md-3 > * {
		    max-width: 25%;
		    -webkit-flex-basis: 25%;
		    flex-basis: 25%;
		  }
		  .col-md-4,
		  .row.cols-md-4 > * {
		    max-width: 33.33333%;
		    -webkit-flex-basis: 33.33333%;
		    flex-basis: 33.33333%;
		  }
		  .col-md-5,
		  .row.cols-md-5 > * {
		    max-width: 41.66667%;
		    -webkit-flex-basis: 41.66667%;
		    flex-basis: 41.66667%;
		  }
		  .col-md-6,
		  .row.cols-md-6 > * {
		    max-width: 50%;
		    -webkit-flex-basis: 50%;
		    flex-basis: 50%;
		  }
		  .col-md-7,
		  .row.cols-md-7 > * {
		    max-width: 58.33333%;
		    -webkit-flex-basis: 58.33333%;
		    flex-basis: 58.33333%;
		  }
		  .col-md-8,
		  .row.cols-md-8 > * {
		    max-width: 66.66667%;
		    -webkit-flex-basis: 66.66667%;
		    flex-basis: 66.66667%;
		  }
		  .col-md-9,
		  .row.cols-md-9 > * {
		    max-width: 75%;
		    -webkit-flex-basis: 75%;
		    flex-basis: 75%;
		  }
		  .col-md-10,
		  .row.cols-md-10 > * {
		    max-width: 83.33333%;
		    -webkit-flex-basis: 83.33333%;
		    flex-basis: 83.33333%;
		  }
		  .col-md-11,
		  .row.cols-md-11 > * {
		    max-width: 91.66667%;
		    -webkit-flex-basis: 91.66667%;
		    flex-basis: 91.66667%;
		  }
		  .col-md-12,
		  .row.cols-md-12 > * {
		    max-width: 100%;
		    -webkit-flex-basis: 100%;
		    flex-basis: 100%;
		  }
		  .col-md-offset-0 {
		    margin-left: 0;
		  }
		  .col-md-offset-1 {
		    margin-left: 8.33333%;
		  }
		  .col-md-offset-2 {
		    margin-left: 16.66667%;
		  }
		  .col-md-offset-3 {
		    margin-left: 25%;
		  }
		  .col-md-offset-4 {
		    margin-left: 33.33333%;
		  }
		  .col-md-offset-5 {
		    margin-left: 41.66667%;
		  }
		  .col-md-offset-6 {
		    margin-left: 50%;
		  }
		  .col-md-offset-7 {
		    margin-left: 58.33333%;
		  }
		  .col-md-offset-8 {
		    margin-left: 66.66667%;
		  }
		  .col-md-offset-9 {
		    margin-left: 75%;
		  }
		  .col-md-offset-10 {
		    margin-left: 83.33333%;
		  }
		  .col-md-offset-11 {
		    margin-left: 91.66667%;
		  }
		  .col-md-normal {
		    -webkit-order: initial;
		    order: initial;
		  }
		  .col-md-first {
		    -webkit-order: -999;
		    order: -999;
		  }
		  .col-md-last {
		    -webkit-order: 999;
		    order: 999;
		  }
		}
		
		@media screen and (min-width: 1280px) {
		  .col-lg,
		  [class^='col-lg-'],
		  [class^='col-lg-offset-'],
		  .row[class*='cols-lg-'] > * {
		    box-sizing: border-box;
		    -webkit-box-flex: 0;
		    -webkit-flex: 0 0 auto;
		    flex: 0 0 auto;
		    padding: 0 0.25rem;
		  }
		  .col-lg,
		  .row.cols-lg > * {
		    -webkit-box-flex: 1;
		    max-width: 100%;
		    -webkit-flex-grow: 1;
		    flex-grow: 1;
		    -webkit-flex-basis: 0;
		    flex-basis: 0;
		  }
		  .col-lg-1,
		  .row.cols-lg-1 > * {
		    max-width: 8.33333%;
		    -webkit-flex-basis: 8.33333%;
		    flex-basis: 8.33333%;
		  }
		  .col-lg-2,
		  .row.cols-lg-2 > * {
		    max-width: 16.66667%;
		    -webkit-flex-basis: 16.66667%;
		    flex-basis: 16.66667%;
		  }
		  .col-lg-3,
		  .row.cols-lg-3 > * {
		    max-width: 25%;
		    -webkit-flex-basis: 25%;
		    flex-basis: 25%;
		  }
		  .col-lg-4,
		  .row.cols-lg-4 > * {
		    max-width: 33.33333%;
		    -webkit-flex-basis: 33.33333%;
		    flex-basis: 33.33333%;
		  }
		  .col-lg-5,
		  .row.cols-lg-5 > * {
		    max-width: 41.66667%;
		    -webkit-flex-basis: 41.66667%;
		    flex-basis: 41.66667%;
		  }
		  .col-lg-6,
		  .row.cols-lg-6 > * {
		    max-width: 50%;
		    -webkit-flex-basis: 50%;
		    flex-basis: 50%;
		  }
		  .col-lg-7,
		  .row.cols-lg-7 > * {
		    max-width: 58.33333%;
		    -webkit-flex-basis: 58.33333%;
		    flex-basis: 58.33333%;
		  }
		  .col-lg-8,
		  .row.cols-lg-8 > * {
		    max-width: 66.66667%;
		    -webkit-flex-basis: 66.66667%;
		    flex-basis: 66.66667%;
		  }
		  .col-lg-9,
		  .row.cols-lg-9 > * {
		    max-width: 75%;
		    -webkit-flex-basis: 75%;
		    flex-basis: 75%;
		  }
		  .col-lg-10,
		  .row.cols-lg-10 > * {
		    max-width: 83.33333%;
		    -webkit-flex-basis: 83.33333%;
		    flex-basis: 83.33333%;
		  }
		  .col-lg-11,
		  .row.cols-lg-11 > * {
		    max-width: 91.66667%;
		    -webkit-flex-basis: 91.66667%;
		    flex-basis: 91.66667%;
		  }
		  .col-lg-12,
		  .row.cols-lg-12 > * {
		    max-width: 100%;
		    -webkit-flex-basis: 100%;
		    flex-basis: 100%;
		  }
		  .col-lg-offset-0 {
		    margin-left: 0;
		  }
		  .col-lg-offset-1 {
		    margin-left: 8.33333%;
		  }
		  .col-lg-offset-2 {
		    margin-left: 16.66667%;
		  }
		  .col-lg-offset-3 {
		    margin-left: 25%;
		  }
		  .col-lg-offset-4 {
		    margin-left: 33.33333%;
		  }
		  .col-lg-offset-5 {
		    margin-left: 41.66667%;
		  }
		  .col-lg-offset-6 {
		    margin-left: 50%;
		  }
		  .col-lg-offset-7 {
		    margin-left: 58.33333%;
		  }
		  .col-lg-offset-8 {
		    margin-left: 66.66667%;
		  }
		  .col-lg-offset-9 {
		    margin-left: 75%;
		  }
		  .col-lg-offset-10 {
		    margin-left: 83.33333%;
		  }
		  .col-lg-offset-11 {
		    margin-left: 91.66667%;
		  }
		  .col-lg-normal {
		    -webkit-order: initial;
		    order: initial;
		  }
		  .col-lg-first {
		    -webkit-order: -999;
		    order: -999;
		  }
		  .col-lg-last {
		    -webkit-order: 999;
		    order: 999;
		  }
		}
		
		/*
		  Definitions for forms and input elements.
		*/
		form {
		  background: #eeeeee;
		  border: 0.0625rem solid #c9c9c9;
		  margin: 0.5rem;
		  padding: 0.75rem 0.5rem 1.125rem;
		}
		
		fieldset {
		  border: 0.0625rem solid #d0d0d0;
		  border-radius: 0.125rem;
		  margin: 0.125rem;
		  padding: 0.5rem;
		}
		
		legend {
		  box-sizing: border-box;
		  display: table;
		  max-width: 100%;
		  white-space: normal;
		  font-weight: 700;
		  font-size: 0.875rem;
		  padding: 0.125rem 0.25rem;
		}
		
		label {
		  padding: 0.25rem 0.5rem;
		}
		
		.input-group {
		  display: inline-block;
		}
		
		.input-group.fluid {
		  display: -webkit-box;
		  -webkit-box-pack: justify;
		  display: -webkit-flex;
		  display: flex;
		  -webkit-align-items: center;
		  align-items: center;
		  -webkit-justify-content: center;
		  justify-content: center;
		}
		
		.input-group.fluid > input {
		  -webkit-box-flex: 1;
		  max-width: 100%;
		  -webkit-flex-grow: 1;
		  flex-grow: 1;
		  -webkit-flex-basis: 0px;
		  flex-basis: 0px;
		}
		
		@media screen and (max-width: 767px) {
		  .input-group.fluid {
		    -webkit-box-orient: vertical;
		    -webkit-align-items: stretch;
		    align-items: stretch;
		    -webkit-flex-direction: column;
		    flex-direction: column;
		  }
		}
		
		.input-group.vertical {
		  display: -webkit-box;
		  -webkit-box-orient: vertical;
		  -webkit-box-pack: justify;
		  display: -webkit-flex;
		  display: flex;
		  -webkit-flex-direction: column;
		  flex-direction: column;
		  -webkit-align-items: stretch;
		  align-items: stretch;
		  -webkit-justify-content: center;
		  justify-content: center;
		}
		
		.input-group.vertical > input {
		  -webkit-box-flex: 1;
		  max-width: 100%;
		  -webkit-flex-grow: 1;
		  flex-grow: 1;
		  -webkit-flex-basis: 0px;
		  flex-basis: 0px;
		}
		
		[type="number"]::-webkit-inner-spin-button, [type="number"]::-webkit-outer-spin-button {
		  height: auto;
		}
		
		textarea {
		  overflow: auto;
		}
		
		[type="search"] {
		  -webkit-appearance: textfield;
		  outline-offset: -2px;
		}
		
		[type="search"]::-webkit-search-cancel-button,
		[type="search"]::-webkit-search-decoration {
		  -webkit-appearance: none;
		}
		
		input:not([type]), [type="text"], [type="email"], [type="number"], [type="search"],
		[type="password"], [type="url"], [type="tel"], textarea, select {
		  box-sizing: border-box;
		  background: #fafafa;
		  color: #212121;
		  border: 0.0625rem solid #c9c9c9;
		  border-radius: 0.125rem;
		  margin: 0.25rem;
		  padding: 0.5rem 0.75rem;
		}
		
		input:not([type="button"]):not([type="submit"]):not([type="reset"]):hover, input:not([type="button"]):not([type="submit"]):not([type="reset"]):focus, textarea:hover, textarea:focus, select:hover, select:focus {
		  border-color: #0288d1;
		  box-shadow: none;
		}
		
		input:not([type="button"]):not([type="submit"]):not([type="reset"]):invalid, input:not([type="button"]):not([type="submit"]):not([type="reset"]):focus:invalid, textarea:invalid, textarea:focus:invalid, select:invalid, select:focus:invalid {
		  border-color: #d32f2f;
		  box-shadow: none;
		}
		
		input:not([type="button"]):not([type="submit"]):not([type="reset"])[readonly], textarea[readonly], select[readonly] {
		  background: #e5e5e5;
		  border-color: #c9c9c9;
		}
		
		select:not([multiple]):not([size]) {
		  padding-right: 1.5rem;
		  background: url('data:image/svg+xml, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1.5"><path fill="%23212121" d="M.25.75h.5L.5 1"/></svg>') no-repeat right;
		  background-color: #fafafa;
		  -webkit-appearance: none;
		  -moz-appearance: none;
		  appearance: none;
		}
		
		select:not([multiple]):not([size])[readonly] {
		  background-color: #e5e5e5;
		}
		
		select {
		  max-width: 100%;
		}
		
		option {
		  overflow: hidden;
		  text-overflow: ellipsis;
		}
		
		::-webkit-input-placeholder {
		  opacity: 1;
		  color: #616161;
		}
		
		::-moz-placeholder {
		  opacity: 1;
		  color: #616161;
		}
		
		::-ms-placeholder {
		  opacity: 1;
		  color: #616161;
		}
		
		::placeholder {
		  opacity: 1;
		  color: #616161;
		}
		
		button::-moz-focus-inner, [type="button"]::-moz-focus-inner, [type="reset"]::-moz-focus-inner, [type="submit"]::-moz-focus-inner {
		  border-style: none;
		  padding: 0;
		}
		
		button, html [type="button"], [type="reset"], [type="submit"] {
		  -webkit-appearance: button;
		}
		
		button {
		  overflow: visible;
		  text-transform: none;
		}
		
		button, [type="button"], [type="submit"], [type="reset"],
		a.button, label.button, .button,
		a[role="button"], label[role="button"], [role="button"] {
		  display: inline-block;
		  background: rgba(220, 220, 220, 0.75);
		  color: #212121;
		  border: 0;
		  border-radius: 0.125rem;
		  padding: 0.5rem 0.75rem;
		  margin: 0.5rem;
		  text-decoration: none;
		  transition: background 0.3s;
		  cursor: pointer;
		}
		
		button:hover, button:focus, [type="button"]:hover, [type="button"]:focus, [type="submit"]:hover, [type="submit"]:focus, [type="reset"]:hover, [type="reset"]:focus,
		a.button:hover,
		a.button:focus, label.button:hover, label.button:focus, .button:hover, .button:focus,
		a[role="button"]:hover,
		a[role="button"]:focus, label[role="button"]:hover, label[role="button"]:focus, [role="button"]:hover, [role="button"]:focus {
		  background: gainsboro;
		  opacity: 1;
		}
		
		input:disabled, input[disabled], textarea:disabled, textarea[disabled], select:disabled, select[disabled], button:disabled, button[disabled], .button:disabled, .button[disabled], [role="button"]:disabled, [role="button"][disabled] {
		  cursor: not-allowed;
		  opacity: 0.75;
		}
		
		input[type="file"] {
		  border: 0;
		  height: 1px;
		  width: 1px;
		  margin: -1px;
		  overflow: hidden;
		  padding: 0;
		  position: absolute;
		  clip: rect(0 0 0 0);
		  -webkit-clip-path: inset(100%);
		  clip-path: inset(100%);
		}
		
		.button-group {
		  display: -webkit-box;
		  display: -webkit-flex;
		  display: flex;
		  border: 0.0625rem solid #bdbdbd;
		  border-radius: 0.125rem;
		  margin: 0.5rem;
		}
		
		.button-group > button, .button-group [type="button"], .button-group > [type="submit"], .button-group > [type="reset"],
		.button-group > .button, .button-group > [role="button"] {
		  margin: 0;
		  -webkit-box-flex: 1;
		  max-width: 100%;
		  -webkit-flex: 1 1 auto;
		  flex: 1 1 auto;
		  text-align: center;
		  border: 0;
		  border-radius: 0;
		}
		
		.button-group > :not(:first-child) {
		  border-left: 0.0625rem solid #bdbdbd;
		}
		
		@media screen and (max-width: 767px) {
		  .button-group {
		    -webkit-box-orient: vertical;
		    -webkit-flex-direction: column;
		    flex-direction: column;
		  }
		  .button-group > :not(:first-child) {
		    border: 0;
		    border-top: 0.0625rem solid #bdbdbd;
		  }
		}
		
		[type="checkbox"], [type="radio"] {
		  height: 1px;
		  width: 1px;
		  margin: -1px;
		  overflow: hidden;
		  position: absolute;
		  clip: rect(0 0 0 0);
		  -webkit-clip-path: inset(100%);
		  clip-path: inset(100%);
		}
		
		.input-group [type="checkbox"] + label, .input-group [type="radio"] + label {
		  position: relative;
		  display: inline-block;
		  margin-left: 1.25rem;
		  cursor: pointer;
		}
		
		.input-group [type="checkbox"] + label:before, .input-group [type="radio"] + label:before {
		  display: inline-block;
		  position: absolute;
		  top: 0.375rem;
		  left: 0;
		  width: 1rem;
		  height: 1rem;
		  content: '';
		  border: 0.0625rem solid #bdbdbd;
		  border-radius: 0.125rem;
		  background: #fafafa;
		  color: #212121;
		  margin-left: -1.25rem;
		}
		
		.input-group [type="checkbox"] + label:hover:before, .input-group [type="checkbox"] + label:focus:before, .input-group [type="radio"] + label:hover:before, .input-group [type="radio"] + label:focus:before {
		  border-color: #0288d1;
		}
		
		.input-group [type="checkbox"]:focus + label:before, .input-group [type="radio"]:focus + label:before {
		  border-color: #0288d1;
		}
		
		.input-group [type="radio"] + label:before, .input-group [type="radio"] + label:after {
		  border-radius: 50%;
		}
		
		.input-group [type="checkbox"][disabled] + label, .input-group [type="radio"][disabled] + label,
		.input-group [type="checkbox"]:disabled + label, .input-group [type="radio"]:disabled + label {
		  cursor: not-allowed;
		}
		
		.input-group [type="checkbox"][disabled] + label:before, .input-group [type="checkbox"][disabled] + label:after, .input-group [type="radio"][disabled] + label:before, .input-group [type="radio"][disabled] + label:after,
		.input-group [type="checkbox"]:disabled + label:before,
		.input-group [type="checkbox"]:disabled + label:after, .input-group [type="radio"]:disabled + label:before, .input-group [type="radio"]:disabled + label:after {
		  opacity: 0.75;
		}
		
		.input-group [type="checkbox"]:checked + label:after, .input-group [type="radio"]:checked + label:after {
		  position: absolute;
		  background: #212121;
		  content: '';
		  margin-left: -1.25rem;
		  top: 0.625rem;
		  left: 0.25rem;
		  width: 0.625rem;
		  height: 0.625rem;
		}
		
		.input-group [type="checkbox"] + label.switch:before, .input-group [type="radio"] + label.switch:before {
		  top: 0.5rem;
		  width: 1.75rem;
		  height: 0.875rem;
		  border: 0;
		  border-radius: 0.5rem;
		  background: #c9c9c9;
		  margin-left: -2.375rem;
		}
		
		.input-group [type="checkbox"] + label.switch:after, .input-group [type="radio"] + label.switch:after {
		  display: inline-block;
		  content: '';
		  position: absolute;
		  left: 0;
		  width: 1.25rem;
		  height: 1.25rem;
		  background: #e0e0e0;
		  border-radius: 100%;
		  top: 0.3125rem;
		  margin-left: -3rem;
		  transition: left 0.3s;
		}
		
		.input-group [type="checkbox"]:checked + label.switch:before, .input-group [type="radio"]:checked + label.switch:before {
		  background: #dcdcdc;
		}
		
		.input-group [type="checkbox"]:checked + label.switch:after, .input-group [type="radio"]:checked + label.switch:after {
		  left: 1.75rem;
		  width: 1.25rem;
		  height: 1.25rem;
		  top: 0.3125rem;
		  margin-left: -3rem;
		  background: #0277bd;
		}
		
		/*
		  Custom elements for forms and input elements.
		*/
		button.primary, [type="button"].primary, [type="submit"].primary,
		[type="reset"].primary, .button.primary, [role="button"].primary {
		  background: rgba(2, 119, 189, 0.9);
		  color: #fafafa;
		}
		
		button.primary:hover, button.primary:focus, [type="button"].primary:hover, [type="button"].primary:focus, [type="submit"].primary:hover, [type="submit"].primary:focus,
		[type="reset"].primary:hover,
		[type="reset"].primary:focus, .button.primary:hover, .button.primary:focus, [role="button"].primary:hover, [role="button"].primary:focus {
		  background: #0277bd;
		}
		
		button.secondary, [type="button"].secondary, [type="submit"].secondary,
		[type="reset"].secondary, .button.secondary, [role="button"].secondary {
		  background: rgba(198, 40, 40, 0.9);
		  color: #fafafa;
		}
		
		button.secondary:hover, button.secondary:focus, [type="button"].secondary:hover, [type="button"].secondary:focus, [type="submit"].secondary:hover, [type="submit"].secondary:focus,
		[type="reset"].secondary:hover,
		[type="reset"].secondary:focus, .button.secondary:hover, .button.secondary:focus, [role="button"].secondary:hover, [role="button"].secondary:focus {
		  background: #c62828;
		}
		
		button.tertiary, [type="button"].tertiary, [type="submit"].tertiary,
		[type="reset"].tertiary, .button.tertiary, [role="button"].tertiary {
		  background: rgba(95, 145, 51, 0.9);
		  color: #fafafa;
		}
		
		button.tertiary:hover, button.tertiary:focus, [type="button"].tertiary:hover, [type="button"].tertiary:focus, [type="submit"].tertiary:hover, [type="submit"].tertiary:focus,
		[type="reset"].tertiary:hover,
		[type="reset"].tertiary:focus, .button.tertiary:hover, .button.tertiary:focus, [role="button"].tertiary:hover, [role="button"].tertiary:focus {
		  background: #5f9133;
		}
		
		button.inverse, [type="button"].inverse, [type="submit"].inverse,
		[type="reset"].inverse, .button.inverse, [role="button"].inverse {
		  background: rgba(12, 12, 12, 0.9);
		  color: #fafafa;
		}
		
		button.inverse:hover, button.inverse:focus, [type="button"].inverse:hover, [type="button"].inverse:focus, [type="submit"].inverse:hover, [type="submit"].inverse:focus,
		[type="reset"].inverse:hover,
		[type="reset"].inverse:focus, .button.inverse:hover, .button.inverse:focus, [role="button"].inverse:hover, [role="button"].inverse:focus {
		  background: #0c0c0c;
		}
		
		button.small, [type="button"].small, [type="submit"].small,
		[type="reset"].small, .button.small, [role="button"].small {
		  border-radius: 0.0625rem;
		  padding: 0.25rem 0.375rem;
		}
		
		button.large, [type="button"].large, [type="submit"].large,
		[type="reset"].large, .button.large, [role="button"].large {
		  border-radius: 0.25rem;
		  padding: 0.75rem 1.125rem;
		}
		
		/*
		  Definitions for navigation elements.
		*/
		header {
		  display: block;
		  height: 2.75rem;
		  background: #12171a;
		  color: #f5f5f5;
		  padding: 0.125rem 0.5rem;
		  white-space: nowrap;
		  overflow-x: auto;
		  overflow-y: hidden;
		}
		
		header .logo {
		  color: #f5f5f5;
		  font-size: 1.75rem;
		  line-height: 1.3125em;
		  margin: 0.0625rem 0.375rem 0.0625rem 0.0625rem;
		  transition: opacity 0.3s;
		}
		
		header button, header [type="button"],
		header a.button, header label.button, header .button,
		header a[role="button"], header label[role="button"], header [role="button"] {
		  background: #12171a;
		  color: #f5f5f5;
		  vertical-align: top;
		  margin: 0.125rem 0;
		}
		
		header button:hover, header button:focus, header [type="button"]:hover, header [type="button"]:focus,
		header a.button:hover,
		header a.button:focus, header label.button:hover, header label.button:focus, header .button:hover, header .button:focus,
		header a[role="button"]:hover,
		header a[role="button"]:focus, header label[role="button"]:hover, header label[role="button"]:focus, header [role="button"]:hover, header [role="button"]:focus {
		  background: #20292e;
		}
		
		header .logo, header a.button, header a[role="button"] {
		  text-decoration: none;
		}
		
		header.row {
		  box-sizing: content-box;
		}
		
		nav {
		  display: block;
		  background: #eceff1;
		  border: 0.0625rem solid #c9c9c9;
		  margin: 0.5rem;
		  padding: 0.75rem 1rem;
		}
		
		nav a, nav a:visited {
		  display: block;
		  color: #145caf;
		  text-decoration: none;
		}
		
		nav .sublink-1 {
		  padding-left: 1rem;
		  position: relative;
		}
		
		nav .sublink-1:before {
		  position: absolute;
		  left: 0.1875rem;
		  top: -0.0625rem;
		  content: '';
		  height: 100%;
		  border: 0.0625rem solid #bdbdbd;
		  border-left: 0;
		}
		
		nav .sublink-2 {
		  padding-left: 2rem;
		  position: relative;
		}
		
		nav .sublink-2:before {
		  position: absolute;
		  left: 0.1875rem;
		  top: -0.0625rem;
		  content: '';
		  height: 100%;
		  border: 0.0625rem solid #bdbdbd;
		  border-left: 0;
		}
		
		footer {
		  display: block;
		  background: #192024;
		  color: #f5f5f5;
		  margin: 1rem 0 0;
		  padding: 1.5rem 0.5rem 0.75rem;
		  font-size: 0.875rem;
		}
		
		footer a, footer a:visited {
		  color: #0288d1;
		}
		
		header.sticky, footer.sticky {
		  position: -webkit-sticky;
		  position: sticky;
		  z-index: 1101;
		}
		
		header.sticky {
		  top: 0;
		}
		
		footer.sticky {
		  bottom: 0;
		}
		
		.drawer-toggle:before {
		  position: relative;
		  top: 0.4375rem;
		  font-family: sans-serif;
		  font-size: 2.5rem;
		  line-height: 0.125;
		  content: '\2261';
		}
		
		.drawer {
		  display: block;
		  box-sizing: border-box;
		  position: fixed;
		  top: 0;
		  width: 320px;
		  height: 100vh;
		  overflow-y: auto;
		  background: #eceff1;
		  border: 0.0625rem solid #c9c9c9;
		  margin: 0;
		  z-index: 1110;
		}
		
		.drawer:not(.right) {
		  left: -320px;
		  transition: left 0.3s;
		}
		
		.drawer.right {
		  right: -320px;
		  transition: right 0.3s;
		}
		
		.drawer .close {
		  position: absolute;
		  top: 0.75rem;
		  right: 0.25rem;
		  z-index: 1111;
		  padding: 0;
		}
		
		@media screen and (max-width: 320px) {
		  .drawer {
		    width: 100%;
		  }
		}
		
		@media screen and (min-width: 768px) {
		  .drawer:not(.persistent) {
		    position: static;
		    height: 100%;
		    z-index: 1100;
		  }
		  .drawer:not(.persistent) .close {
		    display: none;
		  }
		  .drawer-toggle:not(.persistent) {
		    display: none;
		  }
		}
		
		:checked + .drawer:not(.right) {
		  left: 0;
		}
		
		:checked + .drawer.right {
		  right: 0;
		}
		
		/*
		  Definitions for the responsive table component.
		*/
		table {
		  border-collapse: separate;
		  border-spacing: 0;
		  border: 0.0625rem solid #c9c9c9;
		  margin: 0 auto;
		}
		
		table caption {
		  font-size: 1.5rem;
		  margin: 0.5rem;
		}
		
		table tr {
		  padding: 0.5rem;
		}
		
		table th, table td {
		  padding: 0.625rem;
		  border-left: 0.0625rem solid #c9c9c9;
		  border-top: 0.0625rem solid #c9c9c9;
		}
		
		table td {
		  background: #fafafa;
		}
		
		table thead th {
		  border-top: 0;
		}
		
		table th {
		  background: #e6e6e6;
		}
		
		table th:first-child, table td:first-child {
		  border-left: 0;
		}
		
		@media screen and (max-width: 767px) {
		  table:not(.preset) {
		    border-collapse: collapse;
		    border: 0;
		    width: 100%;
		  }
		  table:not(.preset) thead, table:not(.preset) th {
		    border: 0;
		    height: 1px;
		    width: 1px;
		    margin: -1px;
		    overflow: hidden;
		    padding: 0;
		    position: absolute;
		    clip: rect(0 0 0 0);
		    -webkit-clip-path: inset(100%);
		    clip-path: inset(100%);
		  }
		  table:not(.preset) tr {
		    display: block;
		    border: 0.0625rem solid #c9c9c9;
		    background: #fafafa;
		    margin-bottom: 0.625rem;
		  }
		  table:not(.preset) td {
		    display: block;
		    border: 0;
		    border-bottom: 0.0625rem solid #c9c9c9;
		    text-align: right;
		    min-height: 1.5rem;
		  }
		  table:not(.preset) td:before {
		    content: attr(data-label);
		    float: left;
		    font-weight: 700;
		  }
		  table:not(.preset) td:last-child {
		    border-bottom: 0;
		  }
		}
		
		@media screen and (min-width: 768px) {
		  table.horizontal, table.scrollable {
		    display: -webkit-box;
		    -webkit-box-flex: 0;
		    -webkit-box-orient: horizontal;
		    -webkit-box-direction: normal;
		    display: -webkit-flex;
		    display: flex;
		    -webkit-flex: 0 1 auto;
		    flex: 0 1 auto;
		    -webkit-flex-flow: row wrap;
		    flex-flow: row wrap;
		    padding: 0.5rem;
		  }
		  table.horizontal caption, table.scrollable caption {
		    -webkit-box-flex: 1;
		    max-width: 100%;
		    -webkit-flex: 0 0 100%;
		    flex: 0 0 100%;
		  }
		  table.horizontal thead, table.horizontal tbody, table.scrollable thead, table.scrollable tbody {
		    display: -webkit-box;
		    -webkit-box-flex: 0;
		    -webkit-box-orient: horizontal;
		    -webkit-box-direction: normal;
		    display: -webkit-flex;
		    display: flex;
		  }
		  table.horizontal thead, table.scrollable thead {
		    z-index: 999;
		  }
		  table.horizontal tr, table.scrollable tr {
		    display: -webkit-box;
		    display: -webkit-flex;
		    display: flex;
		  }
		  table.horizontal thead, table.horizontal tbody {
		    -webkit-flex-flow: row nowrap;
		    flex-flow: row nowrap;
		  }
		  table.horizontal tbody {
		    overflow: auto;
		    -webkit-box-pack: justify;
		    -webkit-justify-content: space-between;
		    justify-content: space-between;
		    -webkit-flex: 1 0 0;
		    flex: 1 0 0;
		  }
		  table.horizontal tr {
		    -webkit-box-flex: 1;
		    -webkit-box-orient: vertical;
		    -webkit-box-direction: normal;
		    -webkit-flex-direction: column;
		    flex-direction: column;
		    -webkit-flex: 1 0 auto;
		    flex: 1 0 auto;
		  }
		  table.horizontal th, table.horizontal td {
		    width: 100%;
		    border: 0.0625rem solid #c9c9c9;
		  }
		  table.horizontal th:not(:first-child), table.horizontal td:not(:first-child) {
		    border-top: 0;
		  }
		  table.horizontal th {
		    text-align: right;
		  }
		  table.horizontal thead tr:first-child {
		    padding-left: 0;
		  }
		  table.horizontal tbody tr:first-child > td {
		    padding-left: 1.25rem;
		  }
		  table.scrollable {
		    overflow: auto;
		    max-height: 400px;
		    border: 0;
		    padding-top: 0;
		  }
		  table.scrollable thead, table.scrollable tbody {
		    -webkit-box-flex: 1;
		    max-width: 100%;
		    -webkit-flex-flow: row wrap;
		    flex-flow: row wrap;
		    -webkit-flex: 0 0 100%;
		    flex: 0 0 100%;
		    border: 0.0625rem solid #c9c9c9;
		  }
		  table.scrollable tbody {
		    border-top: 0;
		    margin-top: -0.0625rem;
		  }
		  table.scrollable tr {
		    -webkit-box-flex: 0;
		    -webkit-box-orient: horizontal;
		    -webkit-box-direction: normal;
		    -webkit-flex-flow: row wrap;
		    flex-flow: row wrap;
		    -webkit-flex: 0 0 100%;
		    flex: 0 0 100%;
		    padding: 0;
		  }
		  table.scrollable th, table.scrollable td {
		    -webkit-box-flex: 1;
		    -webkit-flex: 1 0 0%;
		    flex: 1 0 0%;
		    overflow: hidden;
		    text-overflow: ellipsis;
		  }
		  table.scrollable thead {
		    position: sticky;
		    top: 0;
		  }
		}
		
		@media screen and (max-width: 767px) {
		  table.horizontal.preset, table.scrollable.preset {
		    display: -webkit-box;
		    -webkit-box-flex: 0;
		    -webkit-box-orient: horizontal;
		    -webkit-box-direction: normal;
		    display: -webkit-flex;
		    display: flex;
		    -webkit-flex: 0 1 auto;
		    flex: 0 1 auto;
		    -webkit-flex-flow: row wrap;
		    flex-flow: row wrap;
		    padding: 0.5rem;
		  }
		  table.horizontal.preset caption, table.scrollable.preset caption {
		    -webkit-box-flex: 1;
		    max-width: 100%;
		    -webkit-flex: 0 0 100%;
		    flex: 0 0 100%;
		  }
		  table.horizontal.preset thead, table.horizontal.preset tbody, table.scrollable.preset thead, table.scrollable.preset tbody {
		    display: -webkit-box;
		    -webkit-box-flex: 0;
		    -webkit-box-orient: horizontal;
		    -webkit-box-direction: normal;
		    display: -webkit-flex;
		    display: flex;
		  }
		  table.horizontal.preset thead, table.scrollable.preset thead {
		    z-index: 999;
		  }
		  table.horizontal.preset tr, table.scrollable.preset tr {
		    display: -webkit-box;
		    display: -webkit-flex;
		    display: flex;
		  }
		  table.horizontal.preset thead, table.horizontal.preset tbody {
		    -webkit-flex-flow: row nowrap;
		    flex-flow: row nowrap;
		  }
		  table.horizontal.preset tbody {
		    overflow: auto;
		    -webkit-box-pack: justify;
		    -webkit-justify-content: space-between;
		    justify-content: space-between;
		    -webkit-flex: 1 0 0;
		    flex: 1 0 0;
		  }
		  table.horizontal.preset tr {
		    -webkit-box-flex: 1;
		    -webkit-box-orient: vertical;
		    -webkit-box-direction: normal;
		    -webkit-flex-direction: column;
		    flex-direction: column;
		    -webkit-flex: 1 0 auto;
		    flex: 1 0 auto;
		  }
		  table.horizontal.preset th, table.horizontal.preset td {
		    width: 100%;
		    border: 0.0625rem solid #c9c9c9;
		  }
		  table.horizontal.preset th:not(:first-child), table.horizontal.preset td:not(:first-child) {
		    border-top: 0;
		  }
		  table.horizontal.preset th {
		    text-align: right;
		  }
		  table.horizontal.preset thead tr:first-child {
		    padding-left: 0;
		  }
		  table.horizontal.preset tbody tr:first-child > td {
		    padding-left: 1.25rem;
		  }
		  table.scrollable.preset {
		    overflow: auto;
		    max-height: 400px;
		    border: 0;
		    padding-top: 0;
		  }
		  table.scrollable.preset thead, table.scrollable.preset tbody {
		    -webkit-box-flex: 1;
		    max-width: 100%;
		    -webkit-flex-flow: row wrap;
		    flex-flow: row wrap;
		    -webkit-flex: 0 0 100%;
		    flex: 0 0 100%;
		    border: 0.0625rem solid #c9c9c9;
		  }
		  table.scrollable.preset tbody {
		    border-top: 0;
		    margin-top: -0.0625rem;
		  }
		  table.scrollable.preset tr {
		    -webkit-box-flex: 0;
		    -webkit-box-orient: horizontal;
		    -webkit-box-direction: normal;
		    -webkit-flex-flow: row wrap;
		    flex-flow: row wrap;
		    -webkit-flex: 0 0 100%;
		    flex: 0 0 100%;
		    padding: 0;
		  }
		  table.scrollable.preset th, table.scrollable.preset td {
		    -webkit-box-flex: 1;
		    -webkit-flex: 1 0 0%;
		    flex: 1 0 0%;
		    overflow: hidden;
		    text-overflow: ellipsis;
		  }
		  table.scrollable.preset thead {
		    position: sticky;
		    top: 0;
		  }
		}
		
		table.striped tr:nth-of-type(2n) > td {
		  background: #e5e5e5;
		}
		
		@media screen and (max-width: 767px) {
		  table.striped:not(.preset) tr:nth-of-type(2n) {
		    background: #e5e5e5;
		  }
		}
		
		/*
		  Definitions for cards and containers.
		*/
		.card {
		  display: -webkit-box;
		  -webkit-box-orient: vertical;
		  -webkit-box-pack: justify;
		  -webkit-box-align: center;
		  display: -webkit-flex;
		  display: flex;
		  -webkit-flex-direction: column;
		  flex-direction: column;
		  -webkit-justify-content: space-between;
		  justify-content: space-between;
		  -webkit-align-self: center;
		  align-self: center;
		  position: relative;
		  width: 100%;
		  background: #fafafa;
		  border: 0.0625rem solid #acacac;
		  margin: 0.5rem;
		  overflow: hidden;
		}
		
		.card > .section {
		  box-sizing: border-box;
		  margin: 0;
		  border: 0;
		  border-radius: 0;
		  border-bottom: 0.0625rem solid #c9c9c9;
		  padding: 0.5rem;
		  width: 100%;
		}
		
		.card > .section.media {
		  height: 200px;
		  padding: 0;
		  -o-object-fit: cover;
		  object-fit: cover;
		}
		
		.card > .section:last-child {
		  border-bottom: 0;
		}
		
		@media screen and (min-width: 320px) {
		  .card {
		    max-width: 320px;
		  }
		}
		
		/*
		  Custom elements for cards and containers.
		*/
		@media screen and (min-width: 480px) {
		  .card.large {
		    max-width: 480px;
		  }
		}
		
		@media screen and (min-width: 240px) {
		  .card.small {
		    max-width: 240px;
		  }
		}
		
		.card.fluid {
		  max-width: 100%;
		  width: auto;
		}
		
		.card.warning {
		  background: #ffca28;
		  border: 0.0625rem solid #e8b825;
		}
		
		.card.warning > .section {
		  border-bottom: 0.0625rem solid #e8b825;
		}
		
		.card.warning > .section:last-child {
		  border-bottom: 0;
		}
		
		.card.error {
		  background: #b71c1c;
		  color: #fafafa;
		  border: 0.0625rem solid #a71a1a;
		}
		
		.card.error > .section {
		  border-bottom: 0.0625rem solid #a71a1a;
		}
		
		.card.error > .section:last-child {
		  border-bottom: 0;
		}
		
		.card > .section.dark {
		  background: #e0e0e0;
		}
		
		.card > .section.darker {
		  background: #bdbdbd;
		}
		
		.card > .section.double-padded {
		  padding: 0.75rem;
		}
		
		/*
		  Definitions for tabs/horizontal accordions.
		*/
		.tabs {
		  width: 100%;
		  opacity: 1;
		  display: -webkit-box;
		  -webkit-box-pack: justify;
		  display: -webkit-flex;
		  display: flex;
		  -webkit-justify-content: space-between;
		  justify-content: space-between;
		  -webkit-flex-wrap: wrap;
		  flex-wrap: wrap;
		}
		
		.tabs > label {
		  -webkit-box-flex: 1;
		  -webkit-flex-grow: 1;
		  flex-grow: 1;
		  -webkit-order: 1;
		  order: 1;
		  display: inline-block;
		  height: 1.5rem;
		  cursor: pointer;
		  transition: background 0.3s;
		  background: #e6e6e6;
		  border: 0.0625rem solid #bdbdbd;
		  padding: 0.75rem;
		}
		
		.tabs > label:hover, .tabs > label:focus {
		  background: rgba(230, 230, 230, 0.8);
		}
		
		.tabs > [type="radio"], .tabs > [type="checkbox"] {
		  display: none;
		  visibility: hidden;
		}
		
		.tabs > label + div {
		  -webkit-flex-basis: auto;
		  flex-basis: auto;
		  -webkit-order: 2;
		  order: 2;
		  height: 1px;
		  width: 1px;
		  margin: -1px;
		  overflow: hidden;
		  position: absolute;
		  clip: rect(0 0 0 0);
		  -webkit-clip-path: inset(100%);
		  clip-path: inset(100%);
		  -webkit-transform: scaleY(0);
		  transform: scaleY(0);
		  -webkit-transform-origin: top;
		  transform-origin: top;
	/* Filou disable slide in */
	//	  transition: -webkit-transform 0.3s,
	//	  transform 0.3s;
		}
		
		.tabs > label:not(:first-of-type) {
		  border-left: 0;
		}
		
		.tabs > :checked + label {
		  color: rgba(255, 255, 255, 1);
		  background: rgba(2, 119, 189, 1);
	//	  background: #eeeeee;
	//	  border-bottom-color: #0277bd;
		}
		
		.tabs > :checked + label:hover, .tabs > :checked + label:focus {
		  background: rgba(2, 119, 189, 0.8);
	//	  background: rgba(238, 238, 238, 0.8);
		}
		
		.tabs > :checked + label + div {
		  box-sizing: border-box;
		  position: relative;
	/* Filou Page Height from 400 to 600 */
	//	  height: 600px;
		  height: 100%;
		  width: 100%;
		  overflow: auto;
		  margin: 0;
		  -webkit-transform: scaleY(1);
		  transform: scaleY(1);
		  background: #fafafa;
		  border: 0.0625rem solid #bdbdbd;
		  border-top: 0;
		  padding: 0.5rem;
		  clip: auto;
		  -webkit-clip-path: inset(0%);
		  clip-path: inset(0%);
		}
		
		.tabs.stacked {
		  -webkit-box-orient: vertical;
		  -webkit-flex-direction: column;
		  flex-direction: column;
		}
		
		.tabs.stacked > label {
		  -webkit-order: initial;
		  order: initial;
		}
		
		.tabs.stacked > :checked + label {
		  border: 0.0625rem solid #bdbdbd;
		}
		
		.tabs.stacked > label + div {
		  -webkit-order: initial;
		  order: initial;
		  -webkit-transform-origin: top;
		  transform-origin: top;
		}
		
		.tabs.stacked > label:not(:first-of-type) {
		  border: 0.0625rem solid #bdbdbd;
		  border-top: 0;
		}
		
		.tabs.stacked > :checked + label + div {
		  height: auto;
		}
		
		@media screen and (max-width: 767px) {
		  .tabs {
		    -webkit-box-orient: vertical;
		    -webkit-flex-direction: column;
		    flex-direction: column;
		  }
		  .tabs > label {
		    -webkit-order: initial;
		    order: initial;
		  }
		  .tabs > :checked + label {
		    border: 0.0625rem solid #bdbdbd;
		  }
		  .tabs > label + div {
		    -webkit-order: initial;
		    order: initial;
		  }
		  .tabs > label:not(:first-of-type) {
		    border: 0.0625rem solid #bdbdbd;
		    border-top: 0;
		  }
		}
		
		/*
		  Definitions for contextual background elements, toasts and tooltips.
		*/
		mark {
		  background: #0277bd;
		  color: #fafafa;
		  font-size: 0.9375em;
		  line-height: 1em;
		  border-radius: 0.125rem;
		  padding: 0.125em 0.25em;
		}
		
		mark.inline-block {
		  display: inline-block;
		}
		
		.toast {
		  position: fixed;
		  background: #424242;
		  bottom: 1.5rem;
		  left: 50%;
		  transform: translate(-50%, -50%);
		  color: #fafafa;
		  border-radius: 2rem;
		  padding: 0.75rem 1.5rem;
		  z-index: 1111;
		}
		
		.tooltip {
		  position: relative;
		  display: inline-block;
		}
		
		.tooltip:before, .tooltip:after {
		  position: absolute;
		  opacity: 0;
		  clip: rect(0 0 0 0);
		  -webkit-clip-path: inset(100%);
		  clip-path: inset(100%);
		  transition: all 0.3s;
		  z-index: 1010;
		  left: 50%;
		}
		
		.tooltip:not(.bottom):before, .tooltip:not(.bottom):after {
		  bottom: 75%;
		}
		
		.tooltip.bottom:before, .tooltip.bottom:after {
		  top: 75%;
		}
		
		.tooltip:hover:before, .tooltip:hover:after, .tooltip:focus:before, .tooltip:focus:after {
		  opacity: 1;
		  clip: auto;
		  -webkit-clip-path: inset(0%);
		  clip-path: inset(0%);
		}
		
		.tooltip:before {
		  content: '';
		  background: transparent;
		  border: 0.5rem solid transparent;
		  left: 50%;
		  left: calc(50% - 0.5rem);
		}
		
		.tooltip:not(.bottom):before {
		  border-top-color: #212121;
		}
		
		.tooltip.bottom:before {
		  border-bottom-color: #212121;
		}
		
		.tooltip:after {
		  content: attr(aria-label);
		  background: #212121;
		  border-radius: 0.125rem;
		  color: #fafafa;
		  padding: 0.5rem;
		  white-space: nowrap;
		  -webkit-transform: translateX(-50%);
		  transform: translateX(-50%);
		}
		
		.tooltip:not(.bottom):after {
		  margin-bottom: 1rem;
		}
		
		.tooltip.bottom:after {
		  margin-top: 1rem;
		}
		
		.modal {
		  position: fixed;
		  top: 0;
		  left: 0;
		  display: none;
		  width: 100vw;
		  height: 100vh;
		  background: rgba(0, 0, 0, 0.45);
		}
		
		.modal .card {
		  margin: 0 auto;
		  max-height: 50vh;
		  overflow: auto;
		}
		
		.modal .card .close {
		  position: absolute;
		  top: 0.75rem;
		  right: 0.25rem;
		  padding: 0;
		}
		
		:checked + .modal {
		  display: -webkit-box;
		  -webkit-box-flex: 0;
		  display: -webkit-flex;
		  display: flex;
		  -webkit-flex: 0 1 auto;
		  flex: 0 1 auto;
		  z-index: 1200;
		}
		
		:checked + .modal .card .close {
		  z-index: 1211;
		}
		
		/*
		  Custom contextual background elements and alerts.
		*/
		mark.secondary {
		  background: #e53935;
		}
		
		mark.tertiary {
		  background: #689f38;
		}
		
		mark.tag {
		  border-radius: 200px;
		  padding: 0.25em 0.5em;
		}
		
		mark.inline-block {
		  font-size: 1em;
		  line-height: 1.375em;
		  padding: 0.375em;
		}
		
		.toast.small {
		  border-radius: 1.5rem;
		  padding: 0.5rem 1rem;
		}
		
		.toast.large {
		  border-radius: 3rem;
		  padding: 1.125rem 2.25rem;
		}
		
		/*
		  Definitions for progress elements and spinners.
		*/
		progress {
		  display: block;
		  vertical-align: baseline;
		  -webkit-appearance: none;
		  -moz-appearance: none;
		  appearance: none;
		  height: 0.625rem;
		  width: 90%;
		  width: calc(100% - 1rem);
		  margin: 0.5rem 0.5rem;
		  border: 0;
		  border-radius: 0.125rem;
		  background: #e0e0e0;
		  color: #0277bd;
		}
		
		progress::-webkit-progress-value {
		  background: #0277bd;
		  border-top-left-radius: 0.125rem;
		  border-bottom-left-radius: 0.125rem;
		}
		
		progress::-webkit-progress-bar {
		  background: #e0e0e0;
		}
		
		progress::-moz-progress-bar {
		  background: #0277bd;
		  border-top-left-radius: 0.125rem;
		  border-bottom-left-radius: 0.125rem;
		}
		
		progress[value="1000"]::-webkit-progress-value {
		  border-radius: 0.125rem;
		}
		
		progress[value="1000"]::-moz-progress-bar {
		  border-radius: 0.125rem;
		}
		
		@-webkit-keyframes spinner-donut-anim {
		  0% {
		    -webkit-transform: rotate(0deg);
		  }
		  100% {
		    -webkit-transform: rotate(360deg);
		  }
		}
		
		@keyframes spinner-donut-anim {
		  0% {
		    transform: rotate(0deg);
		  }
		  100% {
		    transform: rotate(360deg);
		  }
		}
		
		.spinner-donut {
		  display: inline-block;
		  border: 0.25rem solid #e3f2fd;
		  border-left: 0.25rem solid #1565c0;
		  border-radius: 50%;
		  width: 1.25rem;
		  height: 1.25rem;
		  -webkit-animation: spinner-donut-anim 1.2s linear infinite;
		  animation: spinner-donut-anim 1.2s linear infinite;
		}
		
		/*
		  Custom elements for progress elements and spinners.
		*/
		progress.inline {
		  display: inline-block;
		  vertical-align: middle;
		  width: 60%;
		}
		
		progress.secondary {
		  color: #e53935;
		}
		
		progress.secondary::-webkit-progress-value {
		  background: #e53935;
		}
		
		progress.secondary::-moz-progress-bar {
		  background: #e53935;
		}
		
		progress.tertiary {
		  color: #689f38;
		}
		
		progress.tertiary::-webkit-progress-value {
		  background: #689f38;
		}
		
		progress.tertiary::-moz-progress-bar {
		  background: #689f38;
		}
		
		.spinner-donut.secondary {
		  border: 0.25rem solid #ffebee;
		  border-left: 0.25rem solid #c62828;
		}
		
		.spinner-donut.tertiary {
		  border: 0.25rem solid #e8f5e9;
		  border-left: 0.25rem solid #2e7d32;
		}
		
		.spinner-donut.large {
		  border-width: 0.375rem;
		  width: 2rem;
		  height: 2rem;
		}
		
		/*
		  Definitions for utilities and helper classes.
		*/
		.hidden {
		  display: none !important;
		}
		
		.visually-hidden {
		  position: absolute !important;
		  width: 1px !important;
		  height: 1px !important;
		  margin: -1px !important;
		  border: 0 !important;
		  padding: 0 !important;
		  clip: rect(0 0 0 0) !important;
		  -webkit-clip-path: inset(100%) !important;
		  clip-path: inset(100%) !important;
		  overflow: hidden !important;
		}
		
		ul.breadcrumbs {
		  display: -webkit-box;
		  display: -webkit-flex;
		  display: flex;
		  list-style: none;
		  margin: 0.5rem;
		  padding: 0;
		}
		
		ul.breadcrumbs li {
		  -webkit-box-flex: 1;
		  max-width: 100%;
		  -webkit-flex-grow: 1;
		  flex-grow: 1;
		  -webkit-flex-basis: 0;
		  flex-basis: 0;
		  position: relative;
		  text-align: center;
		  background: #e6e6e6;
		  height: 2rem;
		  line-height: 2rem;
		  margin-right: 1.125rem;
		}
		
		ul.breadcrumbs li:before, ul.breadcrumbs li:after {
		  content: "";
		  position: absolute;
		  top: 0;
		  width: 0;
		  height: 0;
		  border: 0 solid #e6e6e6;
		  border-width: 1rem 1rem;
		}
		
		ul.breadcrumbs li:before {
		  left: -1rem;
		  border-left-color: transparent;
		}
		
		ul.breadcrumbs li:after {
		  left: 100%;
		  border-color: transparent;
		  border-left-color: #e6e6e6;
		}
		
		ul.breadcrumbs li:first-child:before {
		  border: 0;
		}
		
		ul.breadcrumbs li:last-child {
		  margin-right: 0;
		}
		
		ul.breadcrumbs li:last-child:after {
		  border: 0;
		}
		
		.close {
		  display: inline-block;
		  width: 1.5rem;
		  font-family: sans-serif;
		  font-size: 1.5rem;
		  line-height: 1;
		  font-weight: 700;
		  border-radius: 2rem;
		  background: rgba(230, 230, 230, 0);
		  vertical-align: top;
		  cursor: pointer;
		  transition: background 0.3s;
		}
		
		.close:hover, .close:focus {
		  background: #e6e6e6;
		}
		
		.close:before {
		  content: "\00D7";
		  display: block;
		  text-align: center;
		}
		
		/*
		  Custom elements for utilities and helper classes.
		*/
		.bordered {
		  border: 1px solid rgba(0, 0, 0, 0.25) !important;
		}
		
		.rounded {
		  border-radius: 0.125rem !important;
		}
		
		.circular {
		  border-radius: 50% !important;
		}
		
		.responsive-margin {
		  margin: 0.25rem !important;
		}
		
		@media screen and (min-width: 768px) {
		  .responsive-margin {
		    margin: 0.375rem !important;
		  }
		}
		
		@media screen and (min-width: 1280px) {
		  .responsive-margin {
		    margin: 0.5rem !important;
		  }
		}
		
		.responsive-padding {
		  padding: 0.125rem 0.25rem !important;
		}
		
		@media screen and (min-width: 768px) {
		  .responsive-padding {
		    padding: 0.25rem 0.375rem !important;
		  }
		}
		
		@media screen and (min-width: 1280px) {
		  .responsive-padding {
		    padding: 0.375rem 0.5rem !important;
		  }
		}
		
		.shadowed {
		  box-shadow: 0 0.25rem 0.25rem 0 rgba(0, 0, 0, 0.125), 0 0.125rem 0.125rem -0.125rem rgba(0, 0, 0, 0.25) !important;
		}
		
		@media screen and (max-width: 767px) {
		  .hidden-sm {
		    display: none !important;
		  }
		}
		
		@media screen and (min-width: 768px) and (max-width: 1279px) {
		  .hidden-md {
		    display: none !important;
		  }
		}
		
		@media screen and (min-width: 1280px) {
		  .hidden-lg {
		    display: none !important;
		  }
		}
		
		@media screen and (max-width: 767px) {
		  .visually-hidden-sm {
		    position: absolute !important;
		    width: 1px !important;
		    height: 1px !important;
		    margin: -1px !important;
		    border: 0 !important;
		    padding: 0 !important;
		    clip: rect(0 0 0 0) !important;
		    -webkit-clip-path: inset(100%) !important;
		    clip-path: inset(100%) !important;
		    overflow: hidden !important;
		  }
		}
		
		@media screen and (min-width: 768px) and (max-width: 1279px) {
		  .visually-hidden-md {
		    position: absolute !important;
		    width: 1px !important;
		    height: 1px !important;
		    margin: -1px !important;
		    border: 0 !important;
		    padding: 0 !important;
		    clip: rect(0 0 0 0) !important;
		    -webkit-clip-path: inset(100%) !important;
		    clip-path: inset(100%) !important;
		    overflow: hidden !important;
		  }
		}
		
		@media screen and (min-width: 1280px) {
		  .visually-hidden-lg {
		    position: absolute !important;
		    width: 1px !important;
		    height: 1px !important;
		    margin: -1px !important;
		    border: 0 !important;
		    padding: 0 !important;
		    clip: rect(0 0 0 0) !important;
		    -webkit-clip-path: inset(100%) !important;
		    clip-path: inset(100%) !important;
		    overflow: hidden !important;
		  }
		}		
		
		.noBorder {
	    border:none !important;
	    }
	    
    `);
}