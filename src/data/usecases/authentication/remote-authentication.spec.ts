import { HttpPostClientSpy } from "../../test/mock-http-client";

import { RemoteAuthentication } from "./remote-authentication";

// System Under Teste
// note: Nomenclatura para objeto alvo de teste de uma classe
type SutTypes = {
  sut: RemoteAuthentication;
  httpPostClientSpy: HttpPostClientSpy;
};

function makeSut(url: string = "any_url"): SutTypes {
  const httpPostClientSpy = new HttpPostClientSpy();
  const sut = new RemoteAuthentication(url, httpPostClientSpy);

  return {
    sut,
    httpPostClientSpy,
  };
}

describe("RemoteAuthentication", () => {
  test("Should call HttpPostClient with correct URL", async () => {
    const url = "any_url";
    const { sut, httpPostClientSpy } = makeSut();
    await sut.auth();

    expect(httpPostClientSpy.url).toBe(url);
  });
});
