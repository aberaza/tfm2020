# https://github.com/tensorflow/model-optimization/issues/374#issuecomment-706595589

from tensorflow.keras.layers import Bidirectional
from tensorflow_model_optimization.python.core.sparsity.keras import prunable_layer


class PruneBidir(Bidirectional, prunable_layer.PrunableLayer):
    def get_prunable_weights(self):
        return self.forward_layer._trainable_weights + self.backward_layer._trainable_weights
