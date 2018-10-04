

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

      // 5. numerical data skills
      $('input:checkbox').change(function(){
        var totalUSE_5 = 0;
        var totalENJOY_5 = 0;
        var totalSTRENGTH_5 = 0;
        var totalDEVELOP_5 = 0;

        $('input:checkbox[id=USE][name=numerical_skills]:checked').each(function(){
          totalUSE_5 += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
        });
        $("#numerical_skills_totalUSE").val(totalUSE_5);

        $('input:checkbox[id=ENJOY][name=numerical_skills]:checked').each(function(){
          totalENJOY_5 += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
        });
        $("#numerical_skills_totalENJOY").val(totalENJOY_5);

        $('input:checkbox[id=STRENGTH][name=numerical_skills]:checked').each(function(){
          totalSTRENGTH_5 += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
        });
        $("#numerical_skills_totalSTRENGTH").val(totalSTRENGTH_5);

        $('input:checkbox[id=DEVELOP][name=numerical_skills]:checked').each(function(){
          totalDEVELOP_5 += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
        });
        $("#numerical_skills_totalDEVELOP").val(totalDEVELOP_5);

      });

      // 6. problem-solving  skills
      $('input:checkbox').change(function(){
        var totalUSE_6 = 0;
        var totalENJOY_6 = 0;
        var totalSTRENGTH_6 = 0;
        var totalDEVELOP_6 = 0;

        $('input:checkbox[id=USE][name=problem-solving_skills]:checked').each(function(){
          totalUSE_6 += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
        });
        $("#problem-solving_skills_totalUSE").val(totalUSE_6);

        $('input:checkbox[id=ENJOY][name=problem-solving_skills]:checked').each(function(){
          totalENJOY_6 += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
        });
        $("#problem-solving_skills_totalENJOY").val(totalENJOY_6);

        $('input:checkbox[id=STRENGTH][name=problem-solving_skills]:checked').each(function(){
          totalSTRENGTH_6 += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
        });
        $("#problem-solving_skills_totalSTRENGTH").val(totalSTRENGTH_6);

        $('input:checkbox[id=DEVELOP][name=problem-solving_skills]:checked').each(function(){
          totalDEVELOP_6 += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
        });
        $("#problem-solving_skills_totalDEVELOP").val(totalDEVELOP_6);

      });

      // 7. result orientation skills
      $('input:checkbox').change(function(){
        var totalUSE_7 = 0;
        var totalENJOY_7 = 0;
        var totalSTRENGTH_7 = 0;
        var totalDEVELOP_7 = 0;

        $('input:checkbox[id=USE][name=result_orientation_skills]:checked').each(function(){
          totalUSE_7 += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
        });
        $("#result_orientation_skills_totalUSE").val(totalUSE_7);

        $('input:checkbox[id=ENJOY][name=result_orientation_skills]:checked').each(function(){
          totalENJOY_7 += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
        });
        $("#result_orientation_skills_totalENJOY").val(totalENJOY_7);

        $('input:checkbox[id=STRENGTH][name=result_orientation_skills]:checked').each(function(){
          totalSTRENGTH_7 += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
        });
        $("#result_orientation_skills_totalSTRENGTH").val(totalSTRENGTH_7);

        $('input:checkbox[id=DEVELOP][name=result_orientation_skills]:checked').each(function(){
          totalDEVELOP_7 += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
        });
        $("#result_orientation_skills_totalDEVELOP").val(totalDEVELOP_7);

      });

      // 8. teamwork skills
      $('input:checkbox').change(function(){
        var totalUSE_8 = 0;
        var totalENJOY_8 = 0;
        var totalSTRENGTH_8 = 0;
        var totalDEVELOP_8 = 0;

        $('input:checkbox[id=USE][name=teamwork_skills]:checked').each(function(){
          totalUSE_8 += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
        });
        $("#teamwork_skills_totalUSE").val(totalUSE_8);

        $('input:checkbox[id=ENJOY][name=teamwork_skills]:checked').each(function(){
          totalENJOY_8 += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
        });
        $("#teamwork_skills_totalENJOY").val(totalENJOY_8);

        $('input:checkbox[id=STRENGTH][name=teamwork_skills]:checked').each(function(){
          totalSTRENGTH_8 += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
        });
        $("#teamwork_skills_totalSTRENGTH").val(totalSTRENGTH_8);

        $('input:checkbox[id=DEVELOP][name=teamwork_skills]:checked').each(function(){
          totalDEVELOP_8 += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
        });
        $("#teamwork_skills_totalDEVELOP").val(totalDEVELOP_8);

      });

      // 9. thinking skills
      $('input:checkbox').change(function(){
        var totalUSE_9 = 0;
        var totalENJOY_9 = 0;
        var totalSTRENGTH_9 = 0;
        var totalDEVELOP_9 = 0;

        $('input:checkbox[id=USE][name=thinking_skills]:checked').each(function(){
          totalUSE_9 += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
        });
        $("#thinking_skills_totalUSE").val(totalUSE_9);

        $('input:checkbox[id=ENJOY][name=thinking_skills]:checked').each(function(){
          totalENJOY_9 += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
        });
        $("#thinking_skills_totalENJOY").val(totalENJOY_9);

        $('input:checkbox[id=STRENGTH][name=thinking_skills]:checked').each(function(){
          totalSTRENGTH_9 += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
        });
        $("#thinking_skills_totalSTRENGTH").val(totalSTRENGTH_9);

        $('input:checkbox[id=DEVELOP][name=thinking_skills]:checked').each(function(){
          totalDEVELOP_9 += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
        });
        $("#thinking_skills_totalDEVELOP").val(totalDEVELOP_9);
            //   $('#thinking_progressbar').val(
            //   $('#thinking_progressbar').val()+5);
            //   return false;

      });
      // 9. artistic skills
      $('input:checkbox').change(function(){
        var totalUSE_10 = 0;
        var totalENJOY_10 = 0;
        var totalSTRENGTH_10 = 0;
        var totalDEVELOP_10 = 0;

        $('input:checkbox[id=USE][name=artistic_skills]:checked').each(function(){
          totalUSE_10 += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
        });
        $("#artistic_skills_totalUSE").val(totalUSE_10);

        $('input:checkbox[id=ENJOY][name=artistic_skills]:checked').each(function(){
          totalENJOY_10 += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
        });
        $("#artistic_skills_totalENJOY").val(totalENJOY_10);

        $('input:checkbox[id=STRENGTH][name=artistic_skills]:checked').each(function(){
          totalSTRENGTH_10 += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
        });
        $("#artistic_skills_totalSTRENGTH").val(totalSTRENGTH_10);

        $('input:checkbox[id=DEVELOP][name=artistic_skills]:checked').each(function(){
          totalDEVELOP_10 += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
        });
        $("#artistic_skills_totalDEVELOP").val(totalDEVELOP_10);
      

        });





// "#USE" , '[name="artistic_skills"]'

      // bar graph

      // new Chart(document.getElementById("bar-chart-horizontal"), {
      //   type: 'horizontalBar',
      //   data: {
      //     labels: ["Management Skills","Communication Skills", "Leadership Skills"],
      //     datasets: [
      //       {
      //         // label: "USE", "ENJOY", "STRENGTH", "DEVELOP"
      //         data: [ 10, 20, 30, 50]
      //       }
      //     ]
      //   },
      //   options: {
      //     legend: {display: false},
      //     title: {
      //       display: true,
      //       text: 'testing'
      //     }
      //   }
      // });

      // $(".artistic_use").on('click', function(){
      //   $('artistic_progressbar').val() +5);
      //   console.log('testing');
      // })




//end
  });
