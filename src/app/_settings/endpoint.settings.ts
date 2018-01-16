export class EndpointSettings {

  //private static ENDPOINT       : string = 'http://wildfly10-lemming.rhcloud.com/BPaaS-Questionnaire-WebService-0.0.2-SNAPSHOT';


  private static ENDPOINT       : string = 'http://localhost:8080';
  //private static ENDPOINT       : string = 'https://bpaas-modelling.herokuapp.com:14673';



  private static QUESTIONNAIRE  : string = '/questionnaire';
  private static SEARCH         : string = '/search?';
  private static HTLELEMENTS     : string = '/hotel/htlelements';
  private static ADDHTL          : string = '/hotel/addhtl';
  private static QUESTIONDOMAINS: string = '/getDomains';
  private static NEXTQUESTION: string = '/getNextQuestion';
  private static SUITABLEHOTELS: string = '/getSuitableHotels';

  public static getSearchEndpoint(): string {
    return EndpointSettings.ENDPOINT + EndpointSettings.SEARCH;
  }
  public static getHotelElementsEndpoint(): string {
    return EndpointSettings.ENDPOINT + EndpointSettings.HTLELEMENTS;
  }
  public static getAddHotelEndpoint(): string {
    return EndpointSettings.ENDPOINT + EndpointSettings.ADDHTL;
  }
  public static getQuestionDomainsEndpoint(): string {
    return EndpointSettings.ENDPOINT + EndpointSettings.QUESTIONNAIRE + EndpointSettings.QUESTIONDOMAINS;
  }
  public static getNextQuestionEndpoint(): string {
    return EndpointSettings.ENDPOINT + EndpointSettings.QUESTIONNAIRE + EndpointSettings.NEXTQUESTION;
  }
  public static getSuitableHotelsEndpoint(): string {
    return EndpointSettings.ENDPOINT + EndpointSettings.QUESTIONNAIRE + EndpointSettings.SUITABLEHOTELS;
  }

}
