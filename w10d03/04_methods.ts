interface IPhone {
  phoneNumber: string;
  makePhoneCall: (anotherNumber: string) => boolean
}

const myPhone: IPhone = {
  phoneNumber: '411',
  makePhoneCall: (anotherNumber: string) => {
    return true;
  }
}
