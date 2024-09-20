import { IToken, ITokenPair } from "../interfaces/token.interface";
import { Token } from "../models/token.model";

class TokenRepository {
  public async create(dto: Partial<IToken>): Promise<IToken> {
    return await Token.create(dto);
  }

  public async findByParams(params: Partial<IToken>): Promise<IToken | null> {
    return await Token.findOne(params);
  }

  public async updateTokenPair(
    _userId: string,
    newTokens: ITokenPair,
  ): Promise<void> {
    await Token.findOneAndUpdate({ _userId }, { ...newTokens });
  }
}

export const tokenRepository = new TokenRepository();
