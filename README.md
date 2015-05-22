# Angular-Directive-Persian-DatePickerJqueryUi
Angular Directive from mousavian/bootstrap-jalali-datepicker Library .

Demo : http://plnkr.co/edit/2nhFx3yPGnlCrDn8eyna?p=preview

<h3><b>Usage :</b></h3>

<b>Html :</b>

   <div class="input-append">
               <input date-p
               id="datepicker1"
               class="input-small"
               type="text"
               ng-model="$parent.dt"
               >
               <button  class="btn" type="button" ><i class="icon-calendar">i</i></button>
           </div>

   <b>Js :</b>
           app.directive('dateP', function() {
             return {
               restrict: 'A',
               require: 'ngModel',

               link: function(scope, element, attr, ngModel) {
                 element.datepicker({
                   format: 'dd/mm/yyyy',
                   autoclose: true
                 });
                 element.next().bind('click',function(){
                    element.datepicker('show');
                 })
               }
             }
           });

           app.controller('mainCtrl', function($scope) {

             $scope.dt;
           $scope.dt1;



نکته :  date-p اسم دایر کتیو می باشد


