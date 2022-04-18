# PostgreSQL Pool Test

## Repository에서 pool을 사용할 때, 어떻게 사용해야 할까?

1. new Pool을 통해 생성된 pool을 가져와서 사용한다.
2. pool을 생성하는 컨테이너를 생성하고, 의존성 주입으로 Repository에서 가져와 getPool

new Pool을 통해 생성했을 때, Repository가 생성될 때마다 new Pool을 하게 되지 않을까?라는 생각을 하게 되었음. 그렇다면 Pool을 생성하는 컨테이너를 통해 getPool로 가져오는게 맞을까?라는 고민을 하게 됨.

## Container를 통해 pool을 생성하는 컨테이너 등록
