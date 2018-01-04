window.onload = function() {

    var btnRating = $(".js-rating"),
        btnPoint = $(".js-recoil"),
        companiesLength = $(".bl_companies__item").length,
        pointSortDirection = true,
        ratingSortDirection = true;

    var companyList = getCompanyList();

    ///////// btn Pointer
    btnPoint.on("click", function () {
        pointSortDirection=!pointSortDirection;
        byPoint = sortArrayByField(companyList, pointSortDirection, 'point');
        renderCompanyListHtml(byPoint);
    });

    /////// btn Raiting
    btnRating.on("click", function () {
        ratingSortDirection=!ratingSortDirection;
        byRating = sortArrayByField(companyList, ratingSortDirection, 'rating');
        renderCompanyListHtml(byRating);
    });

    function renderCompanyListHtml(companyList) {
        for (var i = 0; i<companyList.length; i++) {
            $(".bl_companies__item").eq(i).html(companyList[i].innerHtml);
        }
    }

    function getCompanyList() {
        var companyList = [];
        for (var i=0; i< companiesLength; i++) {
            var rating = $(".bl_companies__rating_current").eq(i).text();
            var point =$(".bl_companies__recoil").eq(i).text().replace(',', '.');
            var innerHtml =$(".bl_companies__item").eq(i).html().trim();

            companyList.push({'rating': rating, 'point': point, 'innerHtml': innerHtml});
        }

        return companyList;
    }

    function sortArrayByField(arrayToSort, direction, field) {
        // Use slice() to copy the array and not just make a reference
        var byField = arrayToSort.slice(0);
        byField.sort(function(a,b) {
            if (direction === true) {
                return  a[field] - b[field];
            } else {
                return  b[field] - a[field];
            }
        });

        return byField;
    }
};


