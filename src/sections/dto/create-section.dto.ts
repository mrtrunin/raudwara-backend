export class CreateSectionDto {
  readonly type: string;
  readonly title?: string;
  readonly content?: string;
  readonly url?: string;
  readonly alt?: string;
}

// Split this into separate Dtos, such as CreateSectionImageDto, CreateSectionFormulaDto etc.
