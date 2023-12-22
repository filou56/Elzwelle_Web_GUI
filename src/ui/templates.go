package ui

import (

)

var XxxxHtml = string(`
`)

var TabHtml = string(`
	<div class="tabs">
	  <input type="radio" name="tab-group" id="tab1" checked aria-hidden="true">
	  <label for="tab1" aria-hidden="true">Tab 1</label>
	  <div>
	    <h3>Tab 1</h3>
	    <p>This is the first tab's content.</p>
	  </div>
	  <input type="radio" name="tab-group" id="tab2" aria-hidden="true">
	  <label for="tab2" aria-hidden="true">Tab 2</label>
	  <div>
	    <h3>Tab 2</h3>
	    <p>This is the second tab's content.</p>
	  </div>
	  <input type="radio" name="tab-group" id="tab3" aria-hidden="true">
	  <label for="tab3" aria-hidden="true">Tab 3</label>
	  <div>
	    <h3>Tab 3</h3>
	    <p>This is the third tab's content.</p>
	  </div>
	</div>
`)

var TestHtml = string(`
	<div class="row responsive-label">
      <div class="col-sm-12 col-md-3">
        <label for="readonly">Readonly</label>
      </div>
      <div class="col-sm-12 col-md">
        <input readonly value="readonly" id="readonly" style="width:85%;">
      </div>
    </div>
    <div class="row responsive-label">
      <div class="col-sm-12 col-md-3">
        <label for="select">Select</label>
      </div>
      <div class="col-sm-12 col-md">
        <select id="select"> <option>Apples</option> <option>Oranges</option> </select>
      </div>
    </div>
`)

var GridForm = string(`
    <p>
    <form>
            <fieldset>
                <legend>Aligned form (using grid)</legend>
                <div class="row responsive-label">
                  <div class="col-sm-12 col-md-3">
                    
                        <input type="button" class="primary" value="Primary button">
                    
                  </div>
                  <div class="col-sm-12 col-md">
                    <input type="number" value="42" id="number" style="width:85%;">
                  </div>
                </div>
                <div class="row responsive-label">
                  <div class="col-sm-12 col-md-3">
                    <div class="button-group"><input type="button" class="secondary" value="Primary button"></div>
                  </div>
                  <div class="col-sm-12 col-md">
                    <input value="invalid" id="invalid" style="width:85%;">
                  </div>
                  <script>document.getElementById("invalid").setCustomValidity("This field is invalid");</script>
                </div>
                <div class="row responsive-label">
                  <div class="col-sm-12 col-md-3">
                    <label for="disabled">Disabled</label>
                  </div>
                  <div class="col-sm-12 col-md">
                    <input disabled value="disabled" id="disabled" style="width:85%;">
                  </div>
                </div>
                <div class="row responsive-label">
                  <div class="col-sm-12 col-md-3">
                    <label for="readonly">Readonly</label>
                  </div>
                  <div class="col-sm-12 col-md">
                    <input readonly value="readonly" id="readonly" style="width:85%;">
                  </div>
                </div>
                <div class="row responsive-label">
                  <div class="col-sm-12 col-md-3">
                    <label for="select">Select</label>
                  </div>
                  <div class="col-sm-12 col-md">
                    <select id="select"> <option>Apples</option> <option>Oranges</option> </select>
                  </div>
                </div>
            </fieldset>
        </form>
        </p>

	<div>
	    <table id="table_1">      
			<tr>
				<td>
					<label for="username">username</label>
				</td>
				<td>
					<input type="email" value="" id="username" placeholder="username">
				</td>
				<td>
					<label>xyz</label>
				</td>
			</tr>
			<tr>
				<td>
			        <label for="pwd">pass</label>
		        </td>
		        <td>
			        <input type="password" value="" id="pwd" placeholder="password">
		        </td>
			</tr>  
      </table>
	</div>
	
  
`)

var GridForm2 = string(`
        <form>
            <fieldset>
                <legend>Aligned form (using grid)</legend>
                <div class="row responsive-label">
                  <div class="col-sm-12 col-md-3">
                    
                        <input type="button" class="primary" value="Primary button">
                    
                  </div>
                  <div class="col-sm-12 col-md">
                    <input type="number" value="42" id="number" style="width:85%;">
                  </div>
                </div>
                <div class="row responsive-label">
                  <div class="col-sm-12 col-md-3">
                    <div class="button-group"><input type="button" class="secondary" value="Primary button"></div>
                  </div>
                  <div class="col-sm-12 col-md">
                    <input value="invalid" id="invalid" style="width:85%;">
                  </div>
                  <script>document.getElementById("invalid").setCustomValidity("This field is invalid");</script>
                </div>
                <div class="row responsive-label">
                  <div class="col-sm-12 col-md-3">
                    <label for="disabled">Disabled</label>
                  </div>
                  <div class="col-sm-12 col-md">
                    <input disabled value="disabled" id="disabled" style="width:85%;">
                  </div>
                </div>
                <div class="row responsive-label">
                  <div class="col-sm-12 col-md-3">
                    <label for="readonly">Readonly</label>
                  </div>
                  <div class="col-sm-12 col-md">
                    <input readonly value="readonly" id="readonly" style="width:85%;">
                  </div>
                </div>
                <div class="row responsive-label">
                  <div class="col-sm-12 col-md-3">
                    <label for="select">Select</label>
                  </div>
                  <div class="col-sm-12 col-md">
                    <select id="select"> <option>Apples</option> <option>Oranges</option> </select>
                  </div>
                </div>
            </fieldset>
        </form>
		 <div class="container">
          <div class="row">
            <div class="col-sm-1">
            Test 1
            </div>
            <div class="col-sm-11">
            Test 2
            </div>
          </div>
          <div class="row">
            <div class="col-sm-2">
            Test 3
            </div>
            <div class="col-sm-10">
            Test 4
            </div>
          </div>
          <div class="row">
            <div class="col-sm-3">
            Test 5
            </div>
            <div class="col-sm-9">
            Test 6
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4">
            Test 7
            </div>
            <div class="col-sm-8">
            Test 8
            </div>
          </div>
          <div class="row">
            <div class="col-sm-5">
            Text 1
            </div>
            <div class="col-sm-7">
            Text 2
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
            Text 3
            </div>
            <div class="col-sm-6">
            Text 4
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
            Text 5
            </div>
          <div class="row">
            <div class="col-sm">
            Text 6
            </div>
            <div class="col-sm">
            Text 7
            </div>
          </div>
        </div>
`)

//	<form>
//	  <fieldset>
//	    <legend>Responsive form</legend>
//	    <div class="row">
//	      <div class="col-sm-12 col-md-4">
//	        <label for="username">username</label>
//	      </div>
//	      <div class="col-sm-12 col-md">
//	        <input type="email" value="" id="username" placeholder="username">
//	      </div>
//	    </div>
//	    <div class="row">
//	      <div class="col-sm-12 col-md-4">
//	        <label for="pwd">password</label>
//	      </div>
//	      <div class="col-sm-12 col-md-4">
//	        <input type="password" value="" id="pwd" placeholder="password">
//	      </div>
//	    </div>
//	  </fieldset>
//	</form>
