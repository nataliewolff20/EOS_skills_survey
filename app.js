

$(document).ready(function(){
    //1. management skills //
      $('input:checkbox').change(function(){
        var totalUSE_1 = 0;
        var totalENJOY_1 = 0;
        var totalSTRENGTH_1 = 0;
        var totalDEVELOP_1 = 0;

          $('input:checkbox[id=USE][name=management_skills]:checked').each(function(){
            totalUSE_1 += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
          });
          $("#management_skills_totalUSE").val(totalUSE_1);

          $('input:checkbox[id=ENJOY][name=management_skills]:checked').each(function(){
            totalENJOY_1 += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
          });
          $("#management_skills_totalENJOY").val(totalENJOY_1);

          $('input:checkbox[id=STRENGTH][name=management_skills]:checked').each(function(){
            totalSTRENGTH_1 += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
          });
          $("#management_skills_totalSTRENGTH").val(totalSTRENGTH_1);

          $('input:checkbox[id=DEVELOP][name=management_skills]:checked').each(function(){
            totalDEVELOP_1 += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
          });
          $("#management_skills_totalDEVELOP").val(totalDEVELOP_1);
        });


      //2. communication skills //
        $('input:checkbox').change(function(){
          var totalUSE_2 = 0;
          var totalENJOY_2 = 0;
          var totalSTRENGTH_2 = 0;
          var totalDEVELOP_2 = 0;


          $('input:checkbox[id=USE][name=communication_skills]:checked').each(function(){
            totalUSE_2 += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
          });
          $("#communication_skills_totalUSE").val(totalUSE_2);

          $('input:checkbox[id=ENJOY][name=communication_skills]:checked').each(function(){
            totalENJOY_2 += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
          });
          $("#communication_skills_totalENJOY").val(totalENJOY_2);

          $('input:checkbox[id=STRENGTH][name=communication_skills]:checked').each(function(){
            totalSTRENGTH_2 += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
          });
          $("#communication_skills_totalSTRENGTH").val(totalSTRENGTH_2);

          $('input:checkbox[id=DEVELOP][name=communication_skills]:checked').each(function(){
            totalDEVELOP_2 += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
          });
          $("#communication_skills_totalDEVELOP").val(totalDEVELOP_2);
          });

      // 3. leadership skills
      $('input:checkbox').change(function(){
        var totalUSE_3 = 0;
        var totalENJOY_3 = 0;
        var totalSTRENGTH_3 = 0;
        var totalDEVELOP_3 = 0;

        $('input:checkbox[id=USE][name=leadership_skills]:checked').each(function(){
          totalUSE_3 += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
        });
        $("#leadership_skills_totalUSE").val(totalUSE_3);

        $('input:checkbox[id=ENJOY][name=leadership_skills]:checked').each(function(){
          totalENJOY_3 += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
        });
        $("#leadership_skills_totalENJOY").val(totalENJOY_3);

        $('input:checkbox[id=STRENGTH][name=leadership_skills]:checked').each(function(){
          totalSTRENGTH_3 += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
        });
        $("#leadership_skills_totalSTRENGTH").val(totalSTRENGTH_3);

        $('input:checkbox[id=DEVELOP][name=leadership_skills]:checked').each(function(){
          totalDEVELOP_3 += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
        });
        $("#leadership_skills_totalDEVELOP").val(totalDEVELOP_3);
      });


      // 4. learning skills
      $('input:checkbox').change(function(){
        var totalUSE_4 = 0;
        var totalENJOY_4 = 0;
        var totalSTRENGTH_4 = 0;
        var totalDEVELOP_4 = 0;

        $('input:checkbox[id=USE][name=learning_skills]:checked').each(function(){
          totalUSE_4 += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
        });
        $("#learning_skills_totalUSE").val(totalUSE_4);

        $('input:checkbox[id=ENJOY][name=learning_skills]:checked').each(function(){
          totalENJOY_4 += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
        });
        $("#learning_skills_totalENJOY").val(totalENJOY_4);

        $('input:checkbox[id=STRENGTH][name=learning_skills]:checked').each(function(){
          totalSTRENGTH_4 += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
        });
        $("#learning_skills_totalSTRENGTH").val(totalSTRENGTH_4);

        $('input:checkbox[id=DEVELOP][name=learning_skills]:checked').each(function(){
          totalDEVELOP_4 += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
        });
        $("#learning_skills_totalDEVELOP").val(totalDEVELOP_4);



      });


//end
  });
