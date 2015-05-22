# Angular-Directive-Persian-DatePickerJqueryUi
Angular Directive from mousavian/bootstrap-jalali-datepicker Library .

Demo : http://plnkr.co/edit/2nhFx3yPGnlCrDn8eyna?p=preview

Usage :
 Html :
   <div class="input-append">
               <input date-p
               id="datepicker1"
               class="input-small"
               type="text"
               ng-model="$parent.dt"
               >
               <button  class="btn" type="button" ><i class="icon-calendar">i</i></button>
           </div>
نکته :  date-p اسم دایر کتیو می باشد

    Js :
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





