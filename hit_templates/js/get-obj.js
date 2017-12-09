var VG = (function(vg, $) {
    VG.getObj = function(ind, key, cb) {
        var that = (this === vg ? {} : this);
        //AWS.config.update({accessKeyId: 'AKIAIGY2E2BJRDZEKAHQ', secretAccessKey: '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', region: 'us-east-1'});
        AWS.config.update({accessKeyId: 'AKIAJUCW44V64NZPWXMA', secretAccessKey: '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', region: 'us-east-1'});
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
