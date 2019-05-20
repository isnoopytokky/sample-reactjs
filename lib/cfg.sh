echo 'start load local libs'
pwd
export SASS_BINARY_PATH=./lib/linux-x64-57_binding.node
ls ./lib/
#npm install -g node-sass
#--sass-binary-path="C:\\Users\\myuser\\Downloads\\win32-x64-48_binding.node"
npm install -g node-sass --sass-binary-path="./lib/linux-x64-57_binding.node"
echo 'finished load local libs'
