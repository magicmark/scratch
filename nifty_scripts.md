# Nifty Scripts

This is a random collection bunch of scripts I use for doing various things. use at your own risk.

## listing all top level JS dependencies of a package

```sh
jq -r '.dependencies , .devDependencies | to_entries | .[] | .key' package.json | grep -v yelp | tr '\n' ' '
```

### With versions:

```sh
jq -r '.dependencies | to_entries[] | .key as $k | .value as $v | "\($k)@\($v)"' package.json | grep -v yelp | tr '\n' ' '
```

## killing all processes related to X

This is usually a super bad idea. Probably don't run this, unless you're feeling super lazy.

```sh
ps fux | grep my_service_here | tr -s ' ' | cut -d' ' -f2 | xargs kill
```

## find all yarn linked packages

```sh
find node_modules -maxdepth 1 -type l -ls
```

## run a quick docker container

```sh
docker run -t -i --rm ubuntu bash
```

## change the value of a constant in a directory

```sh
find ./react_component_renderer -type f -name "*.yaml" | xargs -I{} sed -i -e 's/mem: 2800/mem: 4096/g' {}
```
