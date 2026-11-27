


export default class TestData {

    private readonly url: string = 'https://rahulshettyacademy.com/client/#/auth/login' as const;
    private readonly email: string = 'splaywright@gmail.com' as const;
    private readonly password: string = 'Gomasa@1988' as const;

    getUrl(): string {
        return this.url;
    }

    getEmail(): string {
        return this.email;
    }

    getPassword(): string {
        return this.password;
    }

   




}