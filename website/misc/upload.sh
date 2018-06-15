pwd=$(pwd)
TAR_FILENAME=upload.tar.gz
INPUT_DIRNAME=distOptimized/
REMOTE_OUTPUT_DIRNAME=output/blabla/super
REMOTE_OUTPUT_TEMP_DIRNAME=$REMOTE_OUTPUT_DIRNAME/../temp/

rm $TAR_FILENMAME
cd $INPUT_DIRNAME
tar -zcvf $pwd/$TAR_FILENAME ./


# upload

cd $pwd
# cp $TAR_FILENAME $REMOTE_OUTPUT_TEMP_DIRNAME

# execute on server

pwd=$(pwd)
mkdir $REMOTE_OUTPUT_TEMP_DIRNAME
tar -zxvf $TAR_FILENAME -C $REMOTE_OUTPUT_TEMP_DIRNAME
