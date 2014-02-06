module.exports = {
    add : function (req, res) {
        DailyCount.findOne().where({
            name : 'appDownload'
        }).done(function (err, dailyCount) {
            dailyCount.count = dailyCount.count + 1;
            dailyCount.save(function (err) {

            });
        });
        res.send();
    }
};
