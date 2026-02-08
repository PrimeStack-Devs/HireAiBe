import type { Schema, Struct } from '@strapi/strapi';

export interface QuestionQuestionOption extends Struct.ComponentSchema {
  collectionName: 'components_question_question_options';
  info: {
    displayName: 'question-option';
  };
  attributes: {
    isCorrect: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'question.question-option': QuestionQuestionOption;
    }
  }
}
