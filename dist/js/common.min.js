window.onload = function () {

    var btnName = $(".js-btnName"),
        btnRating = $(".js-btnMyRating"),
        btnPoint = $(".js-btnIMDB"),
        companiesLength = $(".bl_companies__item").length,
        nameSortDirection = false,
        pointSortDirection = true,
        ratingSortDirection = true;

    var companyList = getCompanyList();


    ///////// btn Name
    btnName.on("click", function () {
        nameSortDirection = !nameSortDirection;
        byName = sortArrayByField(companyList, nameSortDirection, 'name');
        renderCompanyListHtml(byName);
    });
    ///////// btn Pointer
    btnPoint.on("click", function () {
        pointSortDirection = !pointSortDirection;
        byPoint = sortArrayByField(companyList, pointSortDirection, 'point');
        renderCompanyListHtml(byPoint);

    });

    /////// btn Raiting
    btnRating.on("click", function () {
        ratingSortDirection = !ratingSortDirection;
        byRating = sortArrayByField(companyList, ratingSortDirection, 'rating');
        renderCompanyListHtml(byRating);
    });

    function renderCompanyListHtml(companyList) {
        for (var i = 0; i < companyList.length; i++) {
            $(".bl_companies__item").eq(i).html(companyList[i].innerHtml);
        }
    }

    function getCompanyList() {
        var companyList = [];
        for (var i = 0; i < companiesLength; i++) {
            var name = $(".bl_companies__bonus_name").eq(i).text().trim().toUpperCase();
            var rating = parseFloat($(".js-myRating").eq(i).text().replace(',', '.'));
            var point = $(".js-imdb").eq(i).text().replace(',', '.');
            var innerHtml = $(".bl_companies__item").eq(i).html().trim();

            companyList.push({'name': name, 'rating': rating, 'point': point, 'innerHtml': innerHtml});
        }

        return companyList;
    }

    function sortArrayByField(arrayToSort, direction, field) {
        // Use slice() to copy the array and not just make a reference
        var byField = arrayToSort.slice(0);
        byField.sort(function (a, b) {

            if (direction === true) {
                if (a[field] < b[field]) {
                    return -1;
                }
                if (a[field] > b[field]) {
                    return 1;
                }
                return 0;

            } else {
                if (a[field] > b[field]) {
                    return -1;
                }
                if (a[field] < b[field]) {
                    return 1;
                }
                return 0;

            }
        });

        return byField;
    }
};
