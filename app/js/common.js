window.onload = function() {

    var btnRating = $(".js-rating"),
        btnPoint = $(".js-recoil"),
        companiesLength = $(".bl_companies__item").length,
        pointSortDirection = true,
        ratingSortDirection = true;

    var companyList = getCompanyList();



    ///////// btn Pointer
    var counterPoints = 0;

    btnPoint.on("click", function (){
        counterPoints++;

        if(counterPoints %2 === 0){
            pointSortDirection = true;
            byPoint = sortArrayByPoint(companyList, pointSortDirection);

            for (var i = 0; i<byPoint.length; i++) {

                $(".bl_companies__item").eq(i).html(byPoint[i].innerHtml);
            }

        }else{
            pointSortDirection = false;
            byPoint = sortArrayByPoint(companyList, pointSortDirection);

            for (var i =0; i<companiesLength; i++){
                $(".bl_companies__item").eq(i).html(byPoint[i].innerHtml);
            }
        }
    });





/////// btn Raiting
    var counterRating = 0;

    btnRating.on("click", function (){
        counterRating++;

        if(counterRating %2 === 0){

            pointSortDirection = true;
            byRating = sortArrayByRating(companyList, ratingSortDirection);
            for (var i =0; i<companiesLength; i++){
                $(".bl_companies__item").eq(i).html(byRating[i].innerHtml);
            }

        }else{
            pointSortDirection = false;
            byRating = sortArrayByRating(companyList, ratingSortDirection);
            for (var i = 0; i<byRating.length; i++) {
                $(".bl_companies__item").eq(i).html(byRating[i].innerHtml);
            }

        }
    });


    // DESC



    // console.log(byPoint.reverse());
    // console.log(byRating.reverse());


    function getCompanyList() {
        var companyList = new Array();
        for (var i=0; i< companiesLength; i++) {
            var rating = $(".bl_companies__rating_current").eq(i).text();
            var point =$(".bl_companies__recoil").eq(i).text().replace(',', '.');
            var innerHtml =$(".bl_companies__item").eq(i).html().trim();

            companyList.push({'rating': rating, 'point': point, 'innerHtml': innerHtml});
        }

        return companyList;
    }

    function sortArrayByRating(arrayToSort, direction) {
        // use slice() to copy the array and not just make a reference
        var byRating = arrayToSort.slice(0);
        byRating.sort(function(a,b) {

            if(direction === true){
                return  a.rating - b.rating;
            }else{
                return  b.rating - a.rating;
            }
        });

        return byRating;
    }




    function sortArrayByPoint(arrayToSort, direction) {
        // use slice() to copy the array and not just make a reference
        var byPoint = arrayToSort.slice(0);
        byPoint.sort(function(a,b) {
            if(direction === true){
                return  a.point - b.point;
            }else{
                return  b.point - a.point;
            }
        });

        return byPoint;
    }




};


