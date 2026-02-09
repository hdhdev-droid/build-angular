# App

Angular 로그인 데모 프로젝트입니다.

## 기능

- **로그인**: 이메일/비밀번호 폼 (이메일 형식 검증, 비밀번호 4자 이상)
- **대시보드**: 로그인한 사용자만 접근 (미인증 시 `/login`으로 리다이렉트)
- **로그아웃**: 세션 제거 후 로그인 페이지로 이동
- 인증 상태는 `localStorage`에 저장되어 새로고침 후에도 유지됩니다.

**데모**: 아무 이메일 형식(예: `user@test.com`)과 4자 이상 비밀번호를 입력하면 로그인됩니다.

## 개발 서버

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
