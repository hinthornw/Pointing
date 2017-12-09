var VG = (function(vg, $) {
    VG.putObj = function() {
        console.log('Submitting in VG.putObj');
        var file = document.getElementById('output').value; 
        var resultsTime = document.getElementById('results-time').value;
        var uploadFileName = 'points_task_'+resultsTime + '.json'

        //AWS.config.update({accessKeyId: 'AKIAIGY2E2BJRDZEKAHQ', secretAccessKey: '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', region: 'us-east-1'});
        AWS.config.update({accessKeyId: 'AKIAJUCW44V64NZPWXMA', secretAccessKey: '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', region: 'us-east-1'});
        var buck = 'visualaipascalresponses';
        var s3Client = new AWS.S3();
        var params = {
            Bucket: buck,
            Key: uploadFileName,
            Body: file,
        }
        s3Client.putObject(params, function(err, data) {
           if (err) console.log(err, err.stack); // an error occurred
           else     console.log(data);           // successful response   
        });
    }

    return vg;
}(VG|| {}, jQuery));
