import SecureLS from "secure-ls";

const lsInstance = new SecureLS({ encodingType: "aes", isCompression: true });

export default lsInstance;
