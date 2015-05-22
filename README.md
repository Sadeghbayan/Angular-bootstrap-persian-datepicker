# Angular-Directive-Persian-DatePickerJqueryUi
Angular Directive from mousavian/bootstrap-jalali-datepicker Library .

Demo : http://plnkr.co/edit/2nhFx3yPGnlCrDn8eyna?p=preview

<h3><b>Usage :</b></h3>


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


<b>
Tip :
</b>

<p dir="rtl">

    نکته :  date-p اسم دایر کتیو می باشد

</p>


<b>
Feature:
</b>
<p dir="rtl">

<li>
سازگاری کامل با Ui-mask

</li>


<li>
تبدیل تاریخ بعداز نوشتن در تکست باکس
</li>
</p>

Created by Soheil AziziNejad and <a href="http://webpen.ir">Me</a> :)