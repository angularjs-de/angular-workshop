#!/bin/bash

# First delete all old tags
deletedTags=$(git tag | xargs git tag -d)

# Read all commits (one per line)
logs=$(git log --oneline)

# read every line of git log
IFS=$'\n'
for line in $logs; do
  # split to $sha and rest(commit $message) by first space
  IFS=' '
  read -r sha message <<< $line

  # Replace some special chars
  message=${message// /-}
  message=${message//'*'/}
  message=${message//'('/}
  message=${message//')'/}

  git tag $message $sha
  echo $message
done
