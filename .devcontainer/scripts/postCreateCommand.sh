# /bin/bash

# .envファイルを読み込む
export $(grep -v '^#' .env | xargs)

# 実行ディレクトリパスを取得
script_path=$(readlink -f "$0")
script_dir_path=$(dirname "$script_path")

#######################################################
# 開発者固有のpostCreateCommand [Before]
#######################################################
userOriginalBefore="${script_dir_path}/postCreateCommandUserOriginalBefore.sh"
if [ -f $userOriginalBefore ]; then
    echo "Run ${userOriginalBefore}"
    bash $userOriginalBefore
fi

#######################################################
# Main Script
#######################################################
# パッケージインストール
pnpm install

#######################################################
# 開発者固有のpostCreateCommand [After]
#######################################################
userOriginalAfter="${script_dir_path}/postCreateCommandUserOriginalAfter.sh"
if [ -f $userOriginalAfter ]; then
    echo "Run ${userOriginalAfter}"
    bash $userOriginalAfter
fi
