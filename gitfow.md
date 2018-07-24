GIT(ZSH)
====

[iTerm2](https://www.iterm2.com/)
[Темы](https://github.com/robbyrussell/oh-my-zsh/wiki/Themes)
[Настройки](https://medium.com/@Clovis_app/configuration-of-a-beautiful-efficient-terminal-and-prompt-on-osx-in-7-minutes-827c29391961)

После установки нужно добавить строчку в `~/.gitconfig`:
```
[oh-my-zsh]
  hide-status = 1
```











# ALIASES

|alias | column2|
|------- | -------|
|gup | 'git pull --rebase'|
|gupv | 'git pull --rebase -v’|
|gst | 'git status’|
|gp | 'git push’|
|gm | 'git merge’|
|gcm | 'git checkout master’|
|g | 'git'|
|ga | 'git add'|
|gaa | 'git add —all'|
|gcm | 'git checkout master'|

<details><summary>FULL</summary>

alias | column1
------- | -------
 g | 'git'
 ga | 'git add'
 gaa | 'git add --all'
 gapa | 'git add --patch'
 gau | 'git add --update'
 gap | 'git apply'
 gb | 'git branch'
 gba | 'git branch -a'
 gbd | 'git branch -d'
 gbda | 'git branch --no-color --merged | command grep -vE "^(\*|\s*(master|develop|dev)\s*$)" | command xargs -n 1 git branch -d'
 gbl | 'git blame -b -w'
 gbnm | 'git branch --no-merged'
 gbr | 'git branch --remote'
 gbs | 'git bisect'
 gbsb | 'git bisect bad'
 gbsg | 'git bisect good'
 gbsr | 'git bisect reset'
 gbss | 'git bisect start'
 gc | 'git commit -v'
 gc! | 'git commit -v --amend'
 gcn! | 'git commit -v --no-edit --amend'
 gca | 'git commit -v -a'
 gca! | 'git commit -v -a --amend'
 gcan! | 'git commit -v -a --no-edit --amend'
 gcans! | 'git commit -v -a -s --no-edit --amend'
 gcam | 'git commit -a -m'
 gcsm | 'git commit -s -m'
 gcb | 'git checkout -b'
 gcf | 'git config --list'
 gcl | 'git clone --recursive'
 gclean | 'git clean -fd'
 gpristine | 'git reset --hard && git clean -dfx'
 gcm | 'git checkout master'
 gcd | 'git checkout develop'
 gcmsg | 'git commit -m'
 gco | 'git checkout'
 gcount | 'git shortlog -sn'
 gcp | 'git cherry-pick'
 gcpa | 'git cherry-pick --abort'
 gcpc | 'git cherry-pick --continue'
 gcs | 'git commit -S'
 gd | 'git diff'
 gdca | 'git diff --cached'
 gdcw | 'git diff --cached --word-diff'
 gdct | 'git describe --tags `git rev-list --tags --max-count=1`'
 gdt | 'git diff-tree --no-commit-id --name-only -r'
 gdw | 'git diff --word-diff'
 gg | 'git gui citool'
 gga | 'git gui citool --amend'
 gl | 'git pull'
 glg | 'git log --stat'
 glgp | 'git log --stat -p'
 glgg | 'git log --graph'
 glgga | 'git log --graph --decorate --all'
 glgm | 'git log --graph --max-count=10'
 glo | 'git log --oneline --decorate'
 glol | "git log --graph --pretty='%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
 glola | "git log --graph --pretty='%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --all"
 glog | 'git log --oneline --decorate --graph'
 gloga | 'git log --oneline --decorate --graph --all'
 glp | "_git_log_prettily"
 gm | 'git merge'
 gmom | 'git merge origin/master'
 gmt | 'git mergetool --no-prompt'
 gmtvim | 'git mergetool --no-prompt --tool=vimdiff'
 gmum | 'git merge upstream/master'
 gma | 'git merge --abort'
 gp | 'git push'
 gpd | 'git push --dry-run'
 gpoat | 'git push origin --all && git push origin --tags'
 gpu | 'git push upstream'
 gpv | 'git push -v'
 gr | 'git remote'
 gra | 'git remote add'
 grb | 'git rebase'
 grba | 'git rebase --abort'
 grbc | 'git rebase --continue'
 grbi | 'git rebase -i'
 grbm | 'git rebase master'
 grbs | 'git rebase --skip'
 grh | 'git reset HEAD'
 grhh | 'git reset HEAD --hard'
 grmv | 'git remote rename'
 grrm | 'git remote remove'
 grset | 'git remote set-url'
 grt | 'cd $(git rev-parse --show-toplevel || echo ".")'
 gru | 'git reset --'
 grup | 'git remote update'
 grv | 'git remote -v'
 gsb | 'git status -sb'
 gsd | 'git svn dcommit'
 gsi | 'git submodule init'
 gsps | 'git show --pretty=short --show-signature'
 gsr | 'git svn rebase'
 gss | 'git status -s'
 gst | 'git status'
 gsta | 'git stash save'
 gstaa | 'git stash apply'
 gstc | 'git stash clear'
 gstd | 'git stash drop'
 gstl | 'git stash list'
 gstp | 'git stash pop'
 gsts | 'git stash show --text'
 gsu | 'git submodule update'
 gts | 'git tag -s'
 gtv | 'git tag | sort -V'
 gunignore | 'git update-index --no-assume-unchanged'
 gunwip | 'git log -n 1 | grep -q -c "\-\-wip\-\-" && git reset HEAD~1'
 gup | 'git pull --rebase'
 gupv | 'git pull --rebase -v'
 glum | 'git pull upstream master'
 gwch | 'git whatchanged -p --abbrev-commit --pretty=medium'
 gwip | 'git add -A; git rm $(git ls-files --deleted) 2> /dev/null; git commit --no-verify -m "--wip-- [skip ci]"'

</details>