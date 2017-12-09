var VG = (function(vg, $) {
    VG.getObj = function(ind, key, cb) {
        var that = (this === vg ? {} : this);
        //AWS.config.update({accessKeyId: 'AKIAIGY2E2BJRDZEKAHQ', secretAccessKey: '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', region: 'us-east-1'});
        AWS.config.update({accessKeyId: 'AKIAJYX5KHE6LKNNXKCQ', secretAccessKey: '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', region: 'us-east-1'});
        var buck = 'visualaipascalparts';
        var s3Client = new AWS.S3();
        var params = {
            Bucket: buck,
            Key: key

        }
        s3Client.getObject(params, function(data, err){cb(ind, data, err)});
    }


    return vg;
}(VG|| {}, jQuery));
