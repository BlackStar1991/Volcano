window.onload = function() {

    var btnRating = $(".js-rating"),
        btnRecoil = $(".js-recoil"),
        companiesLength = $(".bl_companies__item").length,
        pointSortDirection = true,
        ratingSortDirection = true;

    var companyList = getCompanyList();

    // ASC
    byPoint = sortArrayByPoint(companyList, pointSortDirection);
    byRating = sortArrayByRating(companyList, ratingSortDirection);

    console.log(byPoint);
    console.log(byRating);


    pointSortDirection = false;
    ratingSortDirection = false;

    // DESC
    byPoint = sortArrayByPoint(companyList, pointSortDirection);
    byRating = sortArrayByRating(companyList, ratingSortDirection);

    console.log(byPoint.reverse());
    console.log(byRating.reverse());


    function getCompanyList() {
        var companyList = new Array();
        for (var i=0; i< companiesLength; i++) {
            var rating = $(".bl_companies__rating_current").eq(i).text();
            var point =$(".bl_companies__recoil").eq(i).text().replace(',', '.');
            var html =$(".bl_companies__item").eq(i).html().trim();

            companyList.push({'rating': rating, 'point': point, 'html': html});
        }

        return companyList;
    }


    function sortArrayByPoint(arrayToSort, direction) {
        // use slice() to copy the array and not just make a reference
        var byPoint = arrayToSort.slice(0);
        byPoint.sort(function(a,b) {
            return a.point - b.point;
        });

        return byPoint;
    }

    function sortArrayByRating(arrayToSort, direction) {
        // use slice() to copy the array and not just make a reference
        var byRating = arrayToSort.slice(0);
        byRating.sort(function(a,b) {
            return a.rating - b.rating;
        });

        return byRating;
    }


};


